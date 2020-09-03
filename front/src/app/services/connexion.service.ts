import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  connecte : Boolean ;

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
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "http://localhost:8000/api/users";

  //Fonction pour retrouver un user par son id
  getUserByID (id: number): Observable <User> {
    return this.http.get<User>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  //Fonction pour éditer le profil
  updateUser(user: User) {
    return this.http.put<User>(this.apiUrl + '/' + user.id, user, this.httpOptions).pipe(catchError(this.handleError))
  }

}
