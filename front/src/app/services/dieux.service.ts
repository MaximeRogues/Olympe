import { Injectable } from '@angular/core';
import { Dieu } from 'src/app/models/dieu';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class DieuxService {
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

  apiUrl = "https://localhost:8000/api/gods";
 
  // on déclare un fonction qui return la liste de dieux en tant qu'observable
  getAllDieux() : Observable <Dieu[]> {
    return this.http.get<Dieu[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  
  //Fonction pour retrouver un dieu par son id
  getDieuByID (id: number): Observable <Dieu> {
    return this.http.get<Dieu>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // //Fonction pour retrouver un dieu par son genre
  // getDieuByGenre (nomGenre: string): Dieu[] {
  //   let listeDieux = this.getAllDieux();
  //   return listeFiltree = listeDieux.filter(dieux.genre => dieux.genre === nomGenre);
  // }

  

  // fonction pour ajouter un dieu au tableau listeDieux
  addDieu(dieu: Dieu): Observable<Dieu> {
    return this.http.post<Dieu>(this.apiUrl ,dieu).pipe(catchError(this.handleError));
  }

  //Fonction pour éditer un dieu
  updateDieu(dieu: Dieu) {
    return this.http.put<Dieu>(this.apiUrl + '/' + dieu.id, dieu, this.httpOptions).pipe(catchError(this.handleError))
  }

  // Fonction pour supprimer un dieu du tableau listeDieux
  deleteDieu(id: number): Observable <Dieu> {
    return this.http.delete<Dieu>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
  }

  
}
