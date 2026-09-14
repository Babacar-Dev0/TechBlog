TechBlog — Projet Angular (Technologie Web 3)
Site vitrine / blog statique développé avec Angular, dans le cadre du projet remplaçant l'examen final du cours de Technologie Web 3.
Thème choisi
Blog technique présentant des articles courts sur le développement web (frameworks, langages, design, déploiement).
Binôme
Prénom NOM 1 — [rôle : ex. routage, page d'accueil, service de données]
Prénom NOM 2 — [rôle : ex. page détail, page contact, mise en forme CSS]
✏️ À compléter avec vos vrais noms avant le rendu.
Fonctionnalités
Page d'accueil : liste d'articles générée dynamiquement (*ngFor) avec filtre par catégorie.
Page de détail : contenu complet d'un article, accessible via /articles/:id.
Page "À propos" : présentation statique du site et du binôme.
Page "Contact" : formulaire avec binding bidirectionnel ([(ngModel)]) et aperçu en direct.
Barre de navigation et pied de page communs, réutilisés via des composants partagés.
Routage géré par le Router Angular (composants standalone, provideRouter).
Données 100% statiques, définies dans article.service.ts (aucune base de données, aucune API).
Lancer le projet en local
npm install
ng serve
Puis ouvrir http://localhost:4200 dans le navigateur.
Structure du projet
src/app/
  components/   -> navbar, footer (composants partagés)
  pages/        -> home, detail, about, contact (les 4 vues)
  services/     -> article.service.ts (données statiques)
  models/       -> article.model.ts
  app.routes.ts -> configuration du routage
Déploiement (bonus)
Site déployé sur Firebase Hosting : [lien à ajouter ici après déploiement]
npm install -g firebase-tools
firebase login
firebase init hosting
ng build
firebase deploy