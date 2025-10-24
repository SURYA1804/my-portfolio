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
    { 
      name: '.NET Core', 
      level: 90, 
      color: '#8e44ad', 
      icon: 'assets/DotnetLogo.png', 
      isImage: true 
    },
    { 
      name: 'Angular', 
      level: 60, 
      color: '#dd1b16', 
      icon: 'fa-brands fa-angular', 
      isImage: false 
    },
    { 
      name: 'MS SQL Server', 
      level: 90, 
      color: '#2980b9', 
      icon: 'fa-solid fa-database', 
      isImage: false 
    },
    { 
      name: 'FastAPI', 
      level: 80, 
      color: '#2ecc71', 
      icon: 'fa-solid fa-bolt', 
      isImage: false
    },
    { 
      name: 'AI', 
      level: 70, 
      color: '#9b59b6', 
      icon: 'fa-solid fa-robot', 
      isImage: false 
    },
    { 
      name: 'LangChain', 
      level: 60, 
      color: '#e74c3c', 
      icon: 'fa-solid fa-link', 
      isImage: false 
    }
  ];

  // Generate progress bar gradient
  getProgressGradient(color: string): string {
    return `linear-gradient(90deg, ${color}, ${this.lightenColor(color, 20)})`;
  }

  // Lighten color for gradient effect
  private lightenColor(color: string, percent: number): string {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
  }

  // Get proficiency label based on level
  getProficiencyLabel(level: number): string {
    if (level >= 85) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  }

  // Calculate average skill level
  getAverageLevel(): number {
    const total = this.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / this.skills.length);
  }

  // Count expert level skills (>=85%)
  getExpertCount(): number {
    return this.skills.filter(skill => skill.level >= 85).length;
  }
}
