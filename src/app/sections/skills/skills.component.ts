import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
  { name: 'Dotnet Core', level: 95, color: '#8e44ad', icon: 'assets/DotnetLogo.png'  ,  isImage: true },
  { name: 'Angular', level: 40, color: '#dd1b16', icon: 'fa-brands fa-angular',  isImage: false },
  { name: 'SQL', level: 85, color: '#2980b9', icon: 'fa-solid fa-database',  isImage: false },
  { name: 'Data Science', level: 60, color: '#27ae60', icon: 'fa-solid fa-flask-vial',  isImage: false },
  { name: 'FastAPI', level: 80, color: '#2ecc71', icon: 'fa-solid fa-bolt' ,  isImage: false},
  { name: 'AI', level: 70, color: '#9b59b6', icon: 'fa-solid fa-robot',  isImage: false }
];

}
