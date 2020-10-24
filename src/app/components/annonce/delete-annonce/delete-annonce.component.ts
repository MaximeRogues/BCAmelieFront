import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-delete-annonce',
  templateUrl: './delete-annonce.component.html',
  styleUrls: ['./delete-annonce.component.css']
})
export class DeleteAnnonceComponent implements OnInit {

  isLoading: boolean;
  annonce: Annonce;

  constructor(private annonceService: AnnonceService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true; 
    this.annonceService.getOneAnnonce(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Annonce) => {
    this.annonce = data;  
    this.isLoading = false;
    }); 
  }





}
