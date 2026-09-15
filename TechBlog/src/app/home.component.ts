import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h1>Bienvenue sur TechBlog</h1>
      <p>Découvrez nos articles sur le développement web.</p>

      <div *ngFor="let article of articles" class="card">
        <h3>{{ article.title }}</h3>
        <p>{{ article.excerpt }}</p>
        <p><em>Par {{ article.author }}</em></p>
        <a [routerLink]="['/articles', article.id]" class="btn">Lire l'article</a>
      </div>
    </div>
  `
})
export class HomeComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }
}