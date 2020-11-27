import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnnonceComponent } from './components/annonce/add-annonce/add-annonce.component';
import { DeleteAnnonceComponent } from './components/annonce/delete-annonce/delete-annonce.component';
import { DetailAnnonceComponent } from './components/annonce/detail-annonce/detail-annonce.component';
import { EditAnnonceComponent } from './components/annonce/edit-annonce/edit-annonce.component';
import { ListAnnonceComponent } from './components/annonce/list-annonce/list-annonce.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: ListAnnonceComponent },
  { path: 'annonces/list', component: ListAnnonceComponent },
  { path: 'annonces/add', component: AddAnnonceComponent },
  { path: 'annonces/edit/:id', component: EditAnnonceComponent },
  { path: 'annonces/delete', component: DeleteAnnonceComponent },
  { path: 'annonces/detail/:id', component: DetailAnnonceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
