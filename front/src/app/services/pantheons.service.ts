import { Injectable } from '@angular/core';
import { Pantheons } from 'src/app/models/pantheons';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PantheonsService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  
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
    
      return throwError(errorMessage)
    }
  
    apiUrl = "https://localhost:8000/api/pantheons";
   
    // on déclare un fonction qui return la liste de dieux en tant qu'observable
    getAllPantheons() : Observable <Pantheons[]> {
      return this.http.get<Pantheons[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
    }
    
    //Fonction pour retrouver un dieu par son id
    getPantheonByID (id: number): Observable <Pantheons> {
      return this.http.get<Pantheons>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
    }
}
