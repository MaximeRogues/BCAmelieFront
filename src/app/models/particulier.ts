export class Particulier {
   
    id: number;
    username: string;
    nom: string;
    prenom: string;
    mail: string;
    phone: string;
    password: string;
    
    constructor(id: number = null, 
                username: string = null, 
                nom: string = null, 
                prenom: string = null,
                mail: string = null,
                phone: string = null,
                password: string = null)        
        {
                this.id = id;
                this.username = username;
                this.nom = nom;
                this.prenom = prenom;
                this.mail = mail;
                this.phone = phone;
                this.password = password;
        }
      
}
