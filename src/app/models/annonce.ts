import { Carburant } from './carburant';
import { Modele } from './modele';
import { Particulier } from './particulier';
import { TypeVehicule } from './type-vehicule';

export class Annonce {
        id: number;
        titre: string;
        descriptionComplete: string;
        anneeMiseEnCirculation: number;
        nombreDeKm: number;
        prixJourLocation: number;
        lieuRetrait: string;
        lieuRestitution: string;
        dateCreation: Date;
        photo1: string;
        photo2: string;
        photo3: string;
        modele: Modele;
        typeVehicule: TypeVehicule;
        carburant: Carburant;
        particulier: Particulier;
      
        constructor(id: number = null,
                    titre: string = null,
                    descriptionComplete: string = null,
                    anneeMiseEnCirculation: number = null,
                    nombreDeKm: number = null,
                    prixJourLocation: number = null,
                    lieuRetrait: string = null,
                    lieuRestitution: string = null,
                    dateCreation: Date = new Date(),
                    photo1: string = null,
                    photo2: string = null,
                    photo3: string = null,
                    modele: Modele = null,
                    typeVehicule: TypeVehicule = null,
                    carburant: Carburant = null,
                    particulier: Particulier = null) 
                {
                    this.id = id;
                    this.titre = titre;
                    this.descriptionComplete = descriptionComplete;
                    this.anneeMiseEnCirculation = anneeMiseEnCirculation;
                    this.nombreDeKm = nombreDeKm;
                    this.prixJourLocation = prixJourLocation;
                    this.lieuRetrait = lieuRetrait;
                    this.lieuRestitution = lieuRestitution;
                    this.dateCreation = dateCreation;
                    this.photo1 = photo1;
                    this.photo2 = photo2;
                    this.photo3 = photo3;
                    this.modele = modele;
                    this.typeVehicule = typeVehicule;
                    this.carburant = carburant;
                    this.particulier = particulier;
                }
            }
