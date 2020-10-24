import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-detail-mes-annonces',
  templateUrl: './detail-mes-annonces.component.html',
  styleUrls: ['./detail-mes-annonces.component.css']
})
export class DetailMesAnnoncesComponent implements OnInit {

  id: number;
  isLoading: boolean;
  annonce: Annonce;

  constructor(private annonceService: AnnonceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.isLoading = true;
      this.annonceService.getOneAnnonce(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Annonce) => {
        this.annonce = data;
        this.isLoading = false;
      });
  }
}


