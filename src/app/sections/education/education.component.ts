import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  percentage: string;
  specialization?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationItems: EducationItem[] = [
    {
      degree: 'MCA',
      institution: 'Jain University',
      duration: 'Pursuing',
      location: 'Bangalore, Karnataka',
      percentage: '--',
      specialization: 'NLP & LLM'
    },
    {
      degree: 'BSC',
      institution: 'Karpagam Academy of Higher Education',
      duration: '2022 – 2025',
      location: 'Coimbatore, Tamil Nadu',
      percentage: '82.2%',
      specialization: 'Artificial Intelligence & Data Science'
    },
    {
      degree: 'HSC - Computer Application',
      institution: 'Akshaya Academy Matriculation Higher Secondary School',
      duration: '2020 – 2022',
      location: 'Pollachi, Tamil Nadu',
      percentage: '94%'
    }
  ];

  // Calculate average percentage (excluding 'Pursuing')
  getAveragePercentage(): string {
    const validPercentages = this.educationItems
      .filter(edu => edu.percentage !== '--')
      .map(edu => parseFloat(edu.percentage));
    
    if (validPercentages.length === 0) return '0';
    
    const avg = validPercentages.reduce((sum, val) => sum + val, 0) / validPercentages.length;
    return avg.toFixed(1);
  }

  // Get highest percentage
  getHighestPercentage(): string {
    const validPercentages = this.educationItems
      .filter(edu => edu.percentage !== '--')
      .map(edu => parseFloat(edu.percentage));
    
    if (validPercentages.length === 0) return '0';
    
    return Math.max(...validPercentages).toString();
  }
}
