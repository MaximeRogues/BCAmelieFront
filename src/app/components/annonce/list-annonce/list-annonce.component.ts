import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {

  annonces: Annonce[]; 
  isLoading: boolean;                                                                                                               //afficher "chargement en cours", entre l'envoi de la requete et la réponse du serveur. (asynchrome)
  
  constructor(private annonceService:AnnonceService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.annonceService.getAllAnnonces().subscribe(data => {
      this.annonces = data['hydra:member'];                                                              //Api plateform va stocker toutes les resultats dans hydra:member. on retrouve le hydra:member: dans la console
      this.isLoading = false;
    });
  }
 
  //Appelle notre service pour éditer l'annonce
  deleteAnnonce(id: number): void {
    this.annonceService.deleteAnnonce(id).subscribe(data => {
      this.router.navigate(['annonces/list']);  // on redirige l'utilisateur
  }); 
}
   

}
