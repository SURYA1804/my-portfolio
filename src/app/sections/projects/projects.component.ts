import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Bus Ticket Booking System',
      description: 'A bus ticket booking system that lets users view available seats, make reservations, and get instant confirmations. It efficiently manages bus schedules and seat bookings, providing a user-friendly interface for easy navigation. The system ensures accurate reservation handling and real-time updates, enhancing the overall booking experience.',
      image: 'assets/BusTicketProject.jpg',
      link: 'https://https://github.com/SURYA1804/Bus_Full_Project'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio site built with Angular and Bootstrap to showcase my skills and projects.',
      image: 'assets/ProtfolioProject.png',
      link: 'https://yourname.dev'
    }
  ];
}
