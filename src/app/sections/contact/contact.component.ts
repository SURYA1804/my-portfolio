import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
ngAfterViewInit() {
  const link = document.getElementById('copyEmailLink');
  const message = document.getElementById('copyMessage');

  if (link && message) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('suryaprakashm246@gmail.com').then(() => {
        message.classList.remove('d-none');
        setTimeout(() => message.classList.add('d-none'), 2000);
      });
    });
  }
}
}
