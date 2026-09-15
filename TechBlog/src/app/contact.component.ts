import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Contactez-nous</h1>

      <div *ngIf="!submitted">
        <form (ngSubmit)="onSubmit()">
          <label for="name">Nom</label>
          <input id="name" type="text" [(ngModel)]="name" name="name" required>

          <label for="email">Email</label>
          <input id="email" type="email" [(ngModel)]="email" name="email" required>

          <label for="message">Message</label>
          <textarea id="message" rows="5" [(ngModel)]="message" name="message" required></textarea>

          <button type="submit" class="btn">Envoyer</button>
        </form>
      </div>

      <div *ngIf="submitted" class="card">
        <h2>Merci, {{ name }} !</h2>
        <p>Votre message a bien été reçu.</p>
      </div>
    </div>
  `
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}