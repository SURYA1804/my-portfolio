import { Component, HostListener } from '@angular/core';
import { HomeComponent } from './sections/home/home.component';
import { WorkComponent } from './sections/work/work.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';

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

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();

      // Centered threshold
      const offset = window.innerHeight / 2;
      if (rect.top <= offset && rect.bottom >= offset) {
        this.activeSection = section;
        break;
      }
    }
  }
}
}
