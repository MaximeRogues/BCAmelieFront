import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Marque } from '../models/marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  apiUrl = 'https://localhost:8000/api/marques';  //on rajoute notre apiUrl, on retrouve notre Url sur la doc de notre api plateforme
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }   //on injecte le service HttpClient, pour pouvoir faire des appels à notre api
  
  
  /****************************************/
  /*         Fonctions du CRUD            */
  /****************************************/


/***** AFFICHE NOS MARQUES *****/

getAllMarques(): Observable<Marque[]> {
  return this.http.get<Marque[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
}


/***** RETOURNE LE DETAIL DE LA MARQUE SELON SON ID *****/

getOneMarque(id: number): Observable<Marque> {
  return this.http.get<Marque>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
};


/***** AJOUT D'UNE MARQUE *****/

//addMarque(marque: Marque): Observable<Marque> {
//  return this.http.post<Marque>(this.apiUrl, marque, this.httpOptions).pipe(retry(1), catchError(this.handleError)
//  );
//};


/***** MODIFICATION D'UNE MARQUE *****/

//editMarque(marque: Marque): Observable<Marque> {
//  return this.http.put<Marque>(this.apiUrl + '/' + marque.id, marque, this.httpOptions).pipe(retry(1),catchError(this.handleError)
//  );
//};


/***** SUPPRESSION D'UNE MARQUE *****/

//deleteMarque(id: number): Observable<Marque> {
//  return this.http.delete<Marque>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError)
////  );
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
  