import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { Router } from '@angular/router';
import { CarburantService } from 'src/app/services/carburant.service';
import { Carburant } from 'src/app/models/carburant';
import { ModeleService } from 'src/app/services/modele.service';
import { TypeVehicule } from 'src/app/models/type-vehicule';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { Modele } from 'src/app/models/modele';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  annonce = new Annonce(); 
  isLoading: boolean;
  carburantList: Carburant[];  //récupère ma liste de carburant, pour les mettre dans un tableau
  modeleList: Modele[];
  typeVehiculeList: TypeVehicule[];
  file: File;
  validPhoto: boolean = false;
  validFileTypes = ["image/jpeg", "image/png", "image/jpg"];

  constructor(private annonceService: AnnonceService, private router: Router, private carburantService: CarburantService, private modeleService: ModeleService, private typeVehiculeService: TypeVehiculeService, private upload:UploadService ) { }

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

    
    this.isLoading = false;
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    if(this.validFileTypes.includes(this.file.type)) {
      this.validPhoto = true;
    }
  }


  addAnnonce(): void {
    if(this.file == undefined || this.file == null || !this.validFileTypes.includes(this.file.type) ) {
      alert("Format d'image non valide, veuillez utiliser un fichier jpg ou png");
      window.location.reload();
      return;
    }
    let formData = new FormData();
    formData.append('file', this.file);
    this.annonce.photo1 = this.file.name;
    
    this.upload.uploadFile(formData);
    this.annonceService.addAnnonce(this.annonce).subscribe(data => {  
    this.router.navigate(['/annonces/list']); // Redirection de l'utilisateur
      // this.toastr.success("L'annonce a bien été ajoutée !"); // On affiche une notification
    });
  }








}
