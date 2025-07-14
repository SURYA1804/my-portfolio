import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  workItems = [
    
          // {
          //   title: 'Software Engineer',
          //   company: 'Payoda Technologies',
          //   description: 'Developing and maintaining scalable backend systems using .NET technologies, contributing to core product features and API integrations.',
          //   duration: 'Oct 2025 – Present'
          // },
          {
            title: 'Software Engineer Trainee',
            company: 'Payoda Technologies',
            description: 'Completed hands-on training in Angular, SQL, and .NET Core, building a strong foundation in full-stack development practices.',
            duration: 'July 2025 – Present'
          },
          {
            title: 'Software Engineer Intern',
            company: 'Payoda Technologies',
            description: 'Contributed to internal projects by developing backend logic and implementing feature enhancements using .NET. Also gained hands-on experience working with Qwen and LLaMA language models.',
            duration: 'Oct 2024 – June 2025 (9 Months)'
          }

  ];
}
