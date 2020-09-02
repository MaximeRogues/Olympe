import { Injectable } from '@angular/core';
import { TypePerso } from 'src/app/models/type-perso';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TypePersoService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

   }

     //  Fonction en cas d'erreur http
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "https://localhost:8000/character_types";
 
  // on déclare un fonction qui return la liste de dieux en tant qu'observable
  getAllTypes() : Observable <TypePerso[]> {
    return this.http.get<TypePerso[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  
  //Fonction pour retrouver un dieu par son id
  getTypeByID (id: number): Observable <TypePerso> {
    return this.http.get<TypePerso>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }
}
