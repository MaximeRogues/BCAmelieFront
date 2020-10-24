import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

   
  id: number;
  isLoading: boolean;
  annonces: Annonce;

  constructor(private annonceService: AnnonceService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

        // Affiche l'annonce selin l'id
      this.isLoading = true;
      this.annonceService.getOneAnnonce(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Annonce) => {
        this.annonces = data;
        this.isLoading = false;
      });
  }


}
