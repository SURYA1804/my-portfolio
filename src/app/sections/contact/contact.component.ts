import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeCopyFunction();
  }

  private initializeCopyFunction(): void {
    const copyBtn = document.getElementById('copyEmailBtn');
    const emailDisplay = document.getElementById('emailDisplay');
    const copyMessage = document.getElementById('copyMessage');
    const emailText = 'suryaprakashm246@gmail.com';

    if (copyBtn && copyMessage) {
      copyBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
          await navigator.clipboard.writeText(emailText);
          
          // Show success message
          copyMessage.classList.add('show');

          // Update button icon temporarily
          const icon = copyBtn.querySelector('i');
          if (icon) {
            icon.className = 'fas fa-check';
          }

          // Hide message and reset icon after 2 seconds
          setTimeout(() => {
            copyMessage.classList.remove('show');
            if (icon) {
              icon.className = 'fas fa-copy';
            }
          }, 2000);

        } catch (err) {
          console.error('Failed to copy email:', err);
        }
      });

      // Also allow clicking the entire email display to copy
      emailDisplay?.addEventListener('click', async (e) => {
        if (e.target !== copyBtn && !copyBtn.contains(e.target as Node)) {
          copyBtn.click();
        }
      });
    }
  }
}
