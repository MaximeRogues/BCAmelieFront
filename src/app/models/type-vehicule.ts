export class TypeVehicule {
   
        id: number;
        nom: string;
        nbrRoues: number;
        aMoteur: boolean;
        
        constructor(id: number = null, nom: string = null, nbrRoues: number = null, aMoteur: boolean = null,) {
                this.id = id;
                this.nom = nom;
                this.nbrRoues = nbrRoues;
                this.aMoteur = aMoteur;
        }
        
}
