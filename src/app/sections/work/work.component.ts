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
          {
            title: 'Technical Developer',
            company: 'DLL',
            description: 'Currently working in .NET development and MS SQL Server, while also building AI-powered solutions using technologies such as LangChain, LangGraph, and Copilot Studio to solve real-world business use cases, automate processes, and improve operational efficiency.'    ,
            duration: 'Aug 2026 – Present'
          },
          {
            title: 'Software Engineer',
            company: 'Payoda Technologies',
            description: 'Worked on both AI-related projects—leveraging tools like LangChain, LangGraph, and Copilot Studio — as well as building scalable backend systems with .NET Core and MS SQL Server. My focus is on creating intelligent, automated solutions while ensuring robust and reliable backend architectures.',
            duration: 'Oct 2025 – July 2026 (10 Months)'
          },
          {
            title: 'Software Engineer Trainee',
            company: 'Payoda Technologies',
            description: 'Completed hands-on training in Angular, SQL, and .NET Core, building a strong foundation in full-stack development practices.',
            duration: 'July 2025 – September 2025 (3 Months)'
          },
          {
            title: 'Software Engineer Intern',
            company: 'Payoda Technologies',
            description: 'Contributed to internal projects by developing backend logic and implementing feature enhancements using .NET. Also gained hands-on experience working with Qwen and LLaMA language models.',
            duration: 'Oct 2024 – June 2025 (9 Months)'
          }

  ];
}
