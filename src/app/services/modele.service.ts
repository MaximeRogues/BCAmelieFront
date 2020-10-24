import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Modele } from '../models/modele';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  apiUrl = 'http://localhost:8000/api/modeles';  //on rajoute notre apiUrl, on retrouve notre Url sur la doc de notre api plateforme
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }   //on injecte le service HttpClient, pour pouvoir faire des appels à notre api) 


  /****************************************/
  /*         Fonctions du CRUD            */
  /****************************************/


/***** AFFICHE NOS MODELES *****/

getAllModeles(): Observable <Modele[]> {
  return this.http.get<Modele[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
}


/***** RETOURNE LE DETAIL DU MODELE SELON SON ID *****/

getOneModele(id: number): Observable<Modele> {
  return this.http.get<Modele>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
};


/***** AJOUT D'UN MODELE *****/

//addModele(modele: Modele): Observable<Modele> {
//  return this.http.post<Modele>(this.apiUrl, modele, this.httpOptions).pipe(retry(1), catchError(this.handleError)
//  );
//};


/***** MODIFICATION D'UN MODELE *****/

//editModele(modele: Modele): Observable<Modele> {
//  return this.http.put<Modele>(this.apiUrl + '/' + modele.id, modele, this.httpOptions).pipe(retry(1),catchError(this.handleError)
//  );
//};


/***** SUPPRESSION D'UN MODELE *****/

//deleteModele(id: number): Observable<Modele> {
//  return this.http.delete<Modele>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError)
//  );
//};


/***** AFFICHAGE DES ERREURS SI CONNEXION IMPOSSIBLE *****/

 handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}





} 
  