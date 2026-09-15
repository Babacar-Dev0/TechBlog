import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Angular pour les débutants',
      author: 'Léa',
      excerpt: 'Les bases pour démarrer avec Angular.',
      content: 'Angular est un framework qui permet de créer des sites web en séparant le code en composants réutilisables. Chaque composant gère une partie de la page.'
    },
    {
      id: 2,
      title: 'Le CSS Grid en 5 minutes',
      author: 'Karim',
      excerpt: 'Comment organiser une page avec CSS Grid.',
      content: 'CSS Grid permet de créer des mises en page en lignes et en colonnes facilement, sans avoir besoin de nombreux div imbriqués.'
    },
    {
      id: 3,
      title: 'Pourquoi apprendre TypeScript',
      author: 'Léa',
      excerpt: 'TypeScript ajoute des types à JavaScript.',
      content: "TypeScript aide à détecter les erreurs avant même d'exécuter le code, ce qui rend le développement plus sûr, surtout sur de gros projets."
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(a => a.id === id);
  }
}