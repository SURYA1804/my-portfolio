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

 @HostListener('window:scroll', [])
onScroll(): void {
  const sections = ['home', 'work', 'skills', 'education', 'projects', 'contact'];
  let foundActive = false;
  this.autoCloseNavbar();

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

  const scrolledToBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
  if (scrolledToBottom) {
    this.activeSection = 'contact';
  }
}
setActiveSection(section: string) {
  this.activeSection = section;
  this.autoCloseNavbar(); 
}

autoCloseNavbar() {
  const navbar = document.getElementById('portfolioNav');
  const toggleBtn = document.querySelector('.navbar-toggler');

  if (navbar?.classList.contains('show') && toggleBtn) {
    new Collapse(navbar, { toggle: false }).hide();
  }
}

}
