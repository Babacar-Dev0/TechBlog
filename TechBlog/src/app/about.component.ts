import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>À propos de TechBlog</h1>
      <p>
        TechBlog est un blog créé dans le cadre du cours de Technologie Web 3,
        pour partager des articles courts sur le développement web.
      </p>
      <h2>Le binôme</h2>
      <p>Prénom NOM 1 — rôle</p>
      <p>Prénom NOM 2 — rôle</p>
    </div>
  `
})
export class AboutComponent {}