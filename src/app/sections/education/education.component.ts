import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
educationItems = [
  {
    degree: 'MCA - NLP & LLM',
    institution: 'Jain University',
    duration: '2025 – 2027',
    location: 'Bangalore,Karnataka',
    percentage: '82.2%'
  },
  {
    degree: 'Bsc- Artificial Intelligence & Data Science',
    institution: 'Karpagam Academy of Higher Education',
    duration: '2022 – 2025',
    location: 'Coimbatore,Tamil Nadu',
    percentage: '82.2%'
  },
  {
    degree: 'HSC - Computer Application',
    institution: 'Akshaya Academy  Matriculation Higher Secondary School',
    duration: '2020 – 2022',
    location: 'Pollachi,Tamil Nadu',
    percentage: '94%'
  }
];


}
