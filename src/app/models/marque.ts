import { Modele } from './modele';

export class Marque {
    id: number;
    nom: string;
    modele: Modele[];

        constructor(id: number = null, nom: string = null, modele: Modele[] = null) {
            this.id = id;
            this.modele = modele;
            this.nom = nom;
        }

}

