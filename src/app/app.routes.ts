import { Routes } from '@angular/router';
import {AnnonceListComponent} from './annonceComponent/annonce-list/annonce-list.component';
import {AnnonceFormComponent} from './annonceComponent/annonce-form/annonce-form.component';
import {ModifierAnnonceComponent} from './annonceComponent/modifier-annonce/modifier-annonce.component';

export const routes: Routes = [
  { path: 'annonces', component: AnnonceListComponent },
  { path: 'create-annonce', component: AnnonceFormComponent },
  { path: 'edit-annonce/:id', component: ModifierAnnonceComponent }

];
