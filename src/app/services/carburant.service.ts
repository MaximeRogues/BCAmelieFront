import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Carburant } from '../models/carburant';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  apiUrl = 'http://localhost:8000/api/carburants';  //on rajoute notre apiUrl, on retrouve notre Url sur la doc de notre api plateforme
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { } //on injecte le service HttpClient, pour pouvoir faire des appels à notre api


  /****************************************/
  /*         Fonctions du CRUD            */
  /****************************************/


/***** AFFICHE NOS CARBURANTS *****/

getAllCarburants(): Observable <Carburant[]> {
  return this.http.get<Carburant[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
}


/***** RETOURNE LE CARBURANT SELON SON ID *****/

getOneCarburant(id: number): Observable<Carburant> {
  return this.http.get<Carburant>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
};


/***** AJOUT D'UN CARBURANT *****/

// addCarburant(carburant: Carburant): Observable<Carburant> {
//  return this.http.post<Carburant>(this.apiUrl, carburant, this.httpOptions).pipe(retry(1), catchError(this.handleError)
//  );
// }; 


/***** MODIFICATION D'UN CARBURANT *****/

//editCarburant(carburant: Carburant): Observable<Carburant> {
//  return this.http.put<Carburant>(this.apiUrl + '/' + carburant.id, carburant, this.httpOptions).pipe(retry(1),catchError(this.handleError)
//  );
//};


/***** SUPPRESSION D'UN CARBURANT *****/

//deleteCarburant(id: number): Observable<Carburant> {
//  return this.http.delete<Carburant>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError)
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
