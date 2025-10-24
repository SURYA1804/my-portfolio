import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './sections/home/home.component';
import { WorkComponent } from './sections/work/work.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import Collapse from 'bootstrap/js/dist/collapse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  currentYear = new Date().getFullYear();
  activeSection = 'home';
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.updateActiveSection();
    this.updateScrollProgress();
    this.handleNavbarScroll();
    this.autoCloseNavbar();
  }

  // Update active section based on scroll position
  private updateActiveSection(): void {
    const sections = ['home', 'work', 'skills', 'education', 'projects', 'contact'];
    let foundActive = false;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        const offset = window.innerHeight / 2;

        if (rect.top <= offset && rect.bottom >= 150) {
          this.activeSection = section;
          foundActive = true;
          break;
        }
      }
    }

    // Check if scrolled to bottom
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
    if (scrolledToBottom) {
      this.activeSection = 'contact';
    }
  }

  // Update scroll progress bar
  private updateScrollProgress(): void {
    const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
    if (scrollProgress) {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.setProperty('--scroll-progress', `${scrolled}%`);
    }
  }

  // Add scrolled class to navbar
  private handleNavbarScroll(): void {
    const navbar = document.querySelector('.navbar-custom');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (navbar) {
      if (scrollTop > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    this.lastScrollTop = scrollTop;
  }

  // Set active section manually
  setActiveSection(section: string): void {
    this.activeSection = section;
    this.autoCloseNavbar();
  }

  // Auto-close navbar on mobile
  autoCloseNavbar(): void {
    const navbar = document.getElementById('portfolioNav');
    const toggleBtn = document.querySelector('.navbar-toggler');

    if (navbar?.classList.contains('show') && toggleBtn) {
      new Collapse(navbar, { toggle: false }).hide();
    }
  }
}
