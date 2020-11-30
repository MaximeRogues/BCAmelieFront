import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { TypeVehicule } from '../models/type-vehicule';

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  apiUrl = 'https://localhost:8000/api/type_vehicules';  //on rajoute notre apiUrl, on retrouve notre Url sur la doc de notre api plateforme
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }   //on injecte le service HttpClient, pour pouvoir faire des appels à notre api
 
  
 /****************************************/
 /*         Fonctions du CRUD            */
 /****************************************/


/***** AFFICHE NOS TYPES DE VEHICULES *****/

getAllTypeVehicule(): Observable<TypeVehicule[]> {
  return this.http.get<TypeVehicule[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError));
}


/***** RETOURNE LE DETAIL DU TYPES DE VEHICULES SELON SON ID *****/

getOneTypeVehicule(id: number): Observable<TypeVehicule> {
  return this.http.get<TypeVehicule>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
};


/***** AJOUT D'UN TYPE DE VEHICULES *****/

//addTypeVehicule(typeVehicule: TypeVehicule): Observable<TypeVehicule> {
//  return this.http.post<TypeVehicule>(this.apiUrl, typeVehicule, this.httpOptions).pipe(retry(1), catchError(this.handleError)
//  );
//};


/***** MODIFICATION D'UN TYPE DE VEHICULES *****/

//editTypeVehicule(typeVehicule: TypeVehicule): Observable<TypeVehicule> {
//  return this.http.put<TypeVehicule>(this.apiUrl + '/' + typeVehicule.id, typeVehicule, this.httpOptions).pipe(retry(1),catchError(this.handleError)
//  );
//};


/***** SUPPRESSION D'UN TYPE DE VEHICULES *****/

//deleteTypeVehiculee(id: number): Observable<TypeVehicule> {
//  return this.http.delete<TypeVehicule>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError)
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
  
