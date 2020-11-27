import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators'
import { Annonce } from '../models/annonce';


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  apiUrl = 'http://localhost:8000/api/annonces';      //on rajoute notre apiUrl, on retrouve notre Url sur la doc de notre api plateforme
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }              //on injecte le service HttpClient, pour pouvoir faire des appels à notre api


  /****************************************/
  /*         Fonctions du CRUD            */
  /****************************************/


  /***** AFFICHE NOS ANNONCES *****/

  getAllAnnonces(): Observable<Annonce[]> {return this.http.get<Annonce[]>(this.apiUrl)
    .pipe(retry(1), catchError(this.handleError));
  }


  /***** RETOURNE LE DETAIL DE L'ANNONCE SELON SON ID *****/ 

  getOneAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/' + id)
    .pipe(retry(1), catchError(this.handleError));
  };


  /***** AJOUT D'UNE ANNONCE *****/

  addAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError)
    );
  };


  /***** MODIFICATION D'UNE ANNONCE *****/

  editAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(this.apiUrl + '/' + annonce.id, annonce, this.httpOptions)
    .pipe(retry(1),catchError(this.handleError)
    );
  };


  /***** SUPPRESSION D'UNE ANNONCE *****/

  deleteAnnonce(id: number): Observable<Annonce> {
    return this.http.delete<Annonce>(this.apiUrl + '/' + id)
    .pipe(retry(1), catchError(this.handleError)
    );
  };


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
  