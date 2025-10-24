import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  year?: string;
  category?: string;
  technologies?: string[];
  features?: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Bus Ticket Booking System',
      description: 'A comprehensive bus ticket booking system that lets users view available seats, make reservations, and get instant confirmations. It efficiently manages bus schedules and seat bookings, providing a user-friendly interface for easy navigation. The system ensures accurate reservation handling and real-time updates, enhancing the overall booking experience.',
      image: 'assets/BusTicketProject.jpg',
      link: 'https://github.com/SURYA1804/Bus_Full_Project',
      github: 'https://github.com/SURYA1804/Bus_Full_Project',
      year: '2024',
      category: 'Full-Stack Development',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Bootstrap'],
      features: [
        'Real-time seat availability tracking',
        'Instant booking confirmation',
        'Dynamic bus schedule management',
        'User-friendly reservation interface',
        'Secure payment integration'
      ]
    },
    {
      title: 'Finance System with AI Chatbot',
      description: 'Developed a complete finance management system featuring a smart chatbot that helps users handle daily banking tasks seamlessly. The system also assists staff in managing routine work and provides managers with clear insights to monitor team and customer activities through simple, natural conversations. Additionally, it includes a customer support ticket module, where I leveraged LLMs to automate ticket prioritization and built a multi-role chatbot using LangChain to enhance support efficiency and responsiveness.',
      image: 'assets/FinanceSystem.png',
      link: 'https://financesystem-ktqj.onrender.com',
      github: 'https://github.com/SURYA1804/BankingSystem',
      year: '2025',
      category: 'AI-Powered Application',
      technologies: ['.NET Core', 'FastAPI', 'Angular', 'LangChain', 'PostgreSQL', 'LLM'],
      features: [
        'AI-powered conversational chatbot',
        'Multi-role access management',
        'Automated ticket prioritization',
        'Natural language query processing',
        'Real-time financial insights',
        'LangChain integration for context-aware responses'
      ]
    }
  ];

  // Calculate total unique technologies
  getTotalTechnologies(): number {
    const allTech = this.projects
      .flatMap(p => p.technologies || [])
      .filter((tech, index, self) => self.indexOf(tech) === index);
    return allTech.length;
  }

  // Open project details (can be expanded to show modal)
  openProjectDetails(project: Project): void {
    console.log('Opening details for:', project.title);
    // Implement modal or navigation logic here
  }
}
