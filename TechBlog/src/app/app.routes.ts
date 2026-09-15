import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles/:id', component: DetailComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];