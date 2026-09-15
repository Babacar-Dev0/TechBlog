import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <span class="logo">TechBlog</span>
      <div class="links">
        <a routerLink="/">Accueil</a>
        <a routerLink="/a-propos">À propos</a>
        <a routerLink="/contact">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #2c3e50;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .links a {
      color: white;
      margin-left: 20px;
    }
  `]
})
export class NavbarComponent {}