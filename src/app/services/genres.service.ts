import { Injectable } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
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

  apiUrl = "http://localhost:8000/api/genres";
 
  // on déclare un fonction qui return la liste de dieux en tant qu'observable
  getAllGenres() : Observable <Genres[]> {
    return this.http.get<Genres[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  
  

  

}
