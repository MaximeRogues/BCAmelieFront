import { Annonce } from './annonce';
import { Marque } from './marque';

export class Modele {
id: number;
nom: string;
marque: Marque;
annonces: Annonce[];

    constructor(id: number = null, nom: string = null, marque: Marque = null, annonces: Annonce[] = null) {
        this.id = id;
        this.marque = marque;
        this.nom = nom;
        this.annonces = annonces;
    }


}

