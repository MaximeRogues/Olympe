import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { Dieu } from '../models/dieu';
import { Heros } from '../models/heros';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserFavoritesService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }


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

  userApiUrl = "http://localhost:8000/api/users";


  addGodToFavorites(god: Dieu) {
    console.log('ajout');
    
    return this.http.post<Dieu>(this.userApiUrl, god).pipe(retry(1), catchError(this.handleError));
  }
}
