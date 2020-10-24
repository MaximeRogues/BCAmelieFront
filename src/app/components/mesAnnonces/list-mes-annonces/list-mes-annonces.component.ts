import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-list-mes-annonces',
  templateUrl: './list-mes-annonces.component.html',
  styleUrls: ['./list-mes-annonces.component.css']
})
export class ListMesAnnoncesComponent implements OnInit {

  annonces: Annonce[];
  isLoading: boolean;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {

      // on affiche toutes les annonces
      this.isLoading = true;
      this.annonceService.getAllAnnonces().subscribe(data => {
        this.annonces = data['hydra:member'];
        this.isLoading = false;
      });
  
  }

}
