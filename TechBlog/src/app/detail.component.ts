import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from './article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container" *ngIf="article; else notFound">
      <a routerLink="/">&larr; Retour aux articles</a>
      <h1>{{ article.title }}</h1>
      <p><em>Par {{ article.author }}</em></p>
      <p>{{ article.content }}</p>
    </div>
    <ng-template #notFound>
      <div class="container">
        <p>Article introuvable.</p>
        <a routerLink="/" class="btn">Retour à l'accueil</a>
      </div>
    </ng-template>
  `
})
export class DetailComponent implements OnInit {
  article: Article | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getArticleById(id);
  }
}