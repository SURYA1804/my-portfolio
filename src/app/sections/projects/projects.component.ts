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
      title: 'Spotify Data Visualizer',
      description: 'A web app that displays personalized Spotify statistics using Chart.js and the Spotify API.',
      image: 'assets/project-spotify.png',
      link: 'https://github.com/yourusername/spotify-visualizer'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio site built with Angular and Bootstrap to showcase my skills and projects.',
      image: 'assets/project-portfolio.png',
      link: 'https://yourname.dev'
    }
  ];
}
