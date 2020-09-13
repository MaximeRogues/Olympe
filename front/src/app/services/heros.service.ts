import { Injectable } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class HerosService {
  
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
    // window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "https://localhost:8000/api/heroes";

  // on déclare un fonction qui return la liste de héros en tant qu'observable
  getAllHeroes(): Observable <Heros[]> {
    return this.http.get<Heros[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError))
  } 

  //Fonction pour retrouver un heros par son nom
  getHeroByID (id: number): Observable <Heros> {
    return this.http.get<Heros>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un heros au tableau listeheros
  addHero(hero: Heros) : Observable <Heros> {
    return this.http.post<Heros>(this.apiUrl, hero).pipe(catchError(this.handleError))
  }

  //Fonction pour éditer un heros
  updateHero(hero: Heros) {
    return this.http.put<Heros>(this.apiUrl + '/' + hero.id, hero).pipe(catchError(this.handleError))
  }

  // Fonction pour supprimer un héros du tableau listeHeros
  deleteHero(id: number): Observable <Heros> {
    return this.http.delete<Heros>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
    }
}
