import { Injectable } from '@angular/core';
import { Monstres } from '../models/monstres';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MonstresService {
  
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

  apiUrl = "https://localhost:8000/api/monsters";

  // on déclare un fonction qui return la liste de monstres en tant qu'observable
  getAllMonsters() : Observable <Monstres[]> {
    return this.http.get<Monstres[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError))
  }
  

  //Fonction pour retourver un monstre par son nom
  getMonsterByID (id: number): Observable <Monstres> {
    return this.http.get<Monstres>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction ajouter un monstre au tableau listeMonstres
  addMonster(monster: Monstres) : Observable <Monstres> {
    return this.http.post<Monstres>(this.apiUrl, monster).pipe(catchError(this.handleError))
  }

  //Fonction pour éditer un monstre
  updateMonster(monster: Monstres) {
    return this.http.put<Monstres>(this.apiUrl + '/' + monster.id, monster).pipe(catchError(this.handleError))
  }

  deleteMonster(id: number): Observable <Monstres> {
    return this.http.delete<Monstres>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
    }
}
