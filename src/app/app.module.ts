import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAnnonceComponent } from './components/annonce/list-annonce/list-annonce.component';
import { DetailAnnonceComponent } from './components/annonce/detail-annonce/detail-annonce.component';
import { AddAnnonceComponent } from './components/annonce/add-annonce/add-annonce.component';
import { EditAnnonceComponent } from './components/annonce/edit-annonce/edit-annonce.component';
import { DeleteAnnonceComponent } from './components/annonce/delete-annonce/delete-annonce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListMesAnnoncesComponent } from './components/mesAnnonces/list-mes-annonces/list-mes-annonces.component';
import { DetailMesAnnoncesComponent } from './components/mesAnnonces/detail-mes-annonces/detail-mes-annonces.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListAnnonceComponent,
    DetailAnnonceComponent,
    AddAnnonceComponent,
    EditAnnonceComponent,
    DeleteAnnonceComponent,
    ListMesAnnoncesComponent,
    DetailMesAnnoncesComponent,
    MenuComponent,
    FooterComponent,
    // ToastrModule.forRoot(),
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,                         //Pour utiliser le serveur BACK END
    FormsModule,                             //pour utiliser les formulaires

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
