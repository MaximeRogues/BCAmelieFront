import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { Carburant } from 'src/app/models/carburant';
import { Modele } from 'src/app/models/modele';
import { TypeVehicule } from 'src/app/models/type-vehicule';
import { AnnonceService } from 'src/app/services/annonce.service';
import { CarburantService } from 'src/app/services/carburant.service';
import { ModeleService } from 'src/app/services/modele.service';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {

  isLoading: boolean;
  annonce: Annonce;
  carburantList: Carburant[];  //récupère ma liste de carburant, pour les mettre dans un tableau
  modeleList: Modele[];
  typeVehiculeList: TypeVehicule[];
  file: File;

  constructor(private annonceService: AnnonceService, private activatedRoute:ActivatedRoute, private router: Router, private carburantService:CarburantService, private typeVehiculeService:TypeVehiculeService, private modeleService:ModeleService  ) { }

//on demande de retrouver l'annonce que l'on veut éditer, grâce à l'id de l'annonce
ngOnInit(): void {
  this.isLoading = true; 

  this.carburantService.getAllCarburants().subscribe((data:Carburant[]) => {
    this.carburantList = data['hydra:member'];   //Api plateform va stocker toutes les resultats dans hydra:member. on retrouve le hydra:member: dans la console
  });

  this.typeVehiculeService.getAllTypeVehicule().subscribe((data:TypeVehicule[]) => {
    this.typeVehiculeList = data['hydra:member']; 
  });

  this.modeleService.getAllModeles().subscribe((data:Modele[]) => {
    this.modeleList = data['hydra:member']; 
  });

  this.annonceService.getOneAnnonce(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data: Annonce) => {
  this.annonce = data;  

  this.isLoading = false;
  }); 
}

onFileChange(event) {
  this.file = event.target.files[0];
  console.log('Image récupérée : ' + this.file.name);
}

//Appelle notre service pour éditer l'annonce
editAnnonce(): void {

  let formData = new FormData();
  formData.append('file', this.file);
  this.annonce.photo1 = this.file.name;        //
  this.annonce.photo2 = this.file.name;  
  this.annonce.photo3 = this.file.name;  

 this.annonceService.editAnnonce(this.annonce).subscribe(data => {
   this.router.navigate(['annonces/list']);  // on redirige l'utilisateur
   }); 

}

}
