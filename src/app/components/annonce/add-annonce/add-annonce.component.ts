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
  file1: File;
  file2: File;  
  file3: File;
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

  onFileChange1(event) {
    this.file1 = event.target.files[0];                     //récupère dans un tableau, le file et le stock dans "file"
    if(this.validFileTypes.includes(this.file1.type)) {    //si validFileTypes est bon, alors on récupère le "file"
      this.validPhoto = true;                             //la photo initialisé à false, devien true, car valide
    }
  }

  onFileChange2(event) {
    this.file2 = event.target.files[0];                     //récupère dans un tableau, le file et le stock dans "file"
    if(this.validFileTypes.includes(this.file2.type)) {    //si validFileTypes est bon, alors on récupère le "file"
      this.validPhoto = true;                             //la photo initialisé à false, devien true, car valide
    }
  }

  onFileChange3(event) {
    this.file3 = event.target.files[0];                     //récupère dans un tableau, le file et le stock dans "file"
    if(this.validFileTypes.includes(this.file3.type)) {    //si validFileTypes est bon, alors on récupère le "file"
      this.validPhoto = true;                             //la photo initialisé à false, devien true, car valide
    }
  }

  addAnnonce(): void {
    //if(this.file == undefined || this.file == null || !this.validFileTypes.includes(this.file.type) ) {    //check si format valide
    //  alert("Format d'image non valide, veuillez utiliser un fichier jpg, jpeg ou png");
    //  window.location.reload();
    //  return;
    //}
    let formData1 = new FormData();               //on créer notre contenant 
    formData1.append('file', this.file1);  
    this.annonce.photo1 = this.file1.name;  
    this.upload.uploadFile(formData1);

    let formData2 = new FormData();  
    formData2.append('file', this.file2); 
    this.annonce.photo2 = this.file2.name;
    this.upload.uploadFile(formData2);

    let formData3 = new FormData();  
    formData3.append('file', this.file3);          //
    this.annonce.photo3 = this.file3.name;  
    this.upload.uploadFile(formData3);            //appelle le fonction uploadFile, qui pousse l'element en BDD 

    this.annonceService.addAnnonce(this.annonce).subscribe(data => {  
    this.router.navigate(['/annonces/list']); // Redirection de l'utilisateur
      // this.toastr.success("L'annonce a bien été ajoutée !"); // On affiche une notification
    });
  }








}
