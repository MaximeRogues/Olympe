import { Injectable } from '@angular/core';
import { Monstres } from '../models/monstres';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MonstresService {
  
  


  listeMonstres= [
    new Monstres(1, 'Cerbère', 'Les Enfers', 'Enorme chien à trois têtes, il est le gardien des Enfers, empêchant les vivants d\'entrer et les morts de sortir. Il se tient aux côtés d\'Hadès mais sera capturé vivant par Héraclès lors de son douzième travail.', 'cerbere.jpg'),

    new Monstres(2, 'Charybde', 'Détroit de Messine', 'A l\'origine une jeune fille, Charybde fut changée en gouffre marin par Zeus pour la punir d\'une mauvaise action. Avec Scylla, elle faillit engloutir le navire de Jason durant sa quête pour la toison d\'or', 'charybde.jpg'),

    new Monstres(3, 'Scylla', 'Détroit de Messine', 'Une nymphe changée en monstre marin par Circé pour avoir tenté de charmer le monstre Glaucos. Elle tua six marins de l\'équipage d\'Ulysse à l\'aide de ses six têtes pourvues de trois rangées de dents.', 'scylla.jpg'),

    new Monstres(4, 'Lion de Némée', 'Région de Némée', 'Un immense lion à la peau impénétrable, que Héraclès devait tuer pour son premier travail, il y parviendra en étouffant la bête à mains nues','lion.jpg'),

    new Monstres(5, 'Hydre de Lerne', 'Marais de Lerne', 'Un monstre à plusieurs têtes au souffle toxique qui repoussent den double quand on les tranche. Elle sera tuée lors du deuxième travail de Héraclès, qui brûlait les plaies au fur et à mesure qu\'il tranchait ses têtes' ,'hydre.jpg'),

    new Monstres(6, 'Chimère', 'Région de Lycie', 'Créature au corps de lion, avec une tête de chèvre cracheuse de feu sur le dos et une queue à tête de serpent. Elle fut tuée par Bellérophon chevauchant Pégase','chimere.jfif'),

    new Monstres(7, 'Gorgones', 'Extrême occident', 'Elles étaient trois soeurs, des monstres aux cheveux de serpents, et dont le regard changeait en pierre. La plus célèbre, Méduse, fut tuée par Persée, il offrit la tête à Athéna, qui la posa sur son bouclier (l\'égide), afin qu\'il pétrifie ses adversaires','gorgones.jpg'),

    new Monstres(8, 'Minotaure', 'Un labyrinthe au centre de la Crête', 'Fils de l\'épouse du roi Minos et d\'un taureau blanc envoyé par Poséidon, on lui livrait tous les neuf ans sept filles et sept garçons pour qu\'il s\'en nourrisse. Il sera tué par Thésée qui ira dans le labyrinthe avec une pelote de fil afin de retrouver son chemin','minotaure.jpg'),

    new Monstres(9, 'Sirènes', 'Detroit de Messine', 'Créatures mi-femmes mi-oiseaux, elles séduisaient les navigateurs afin de les faire s\'échouer et pouvoir dévorer leur corps. Ulysse résista à leur chant en se faisant attacher au mât de son navire et en faisant couler de la cire dans les oreilles de ses hommes','sirenes.jpg'),

    new Monstres(10, 'Sphinx', 'Thèbes', 'Créature au visage de femme mais au corps de lion et aux ailes d\'aigles, il terrorisait Thèbes en tuant quiconque était incapable de résoudre son énigme. C\'est Oedipe qui le vaincra en trouvant la réponse, ce qui fera de lui le nouveau roi de Thèbes','sphinx.jpg'),

    new Monstres(11, 'Polyphème', 'Pays des Cyclopes en Sicile', 'Il enferma Ulysse et ses hommes dans sa grotte après qu\'ils aient mangé sa nourriture sans se poser de question. Il mangea plusieurs hommes avant de se faire crever l\'oeil par Ulysse, qui réussit à s\échapper en s\'accrochant sous les moutons du cyclope lorsqu\'il les mène au pâturage ', 'polypheme.jpg')

  ]

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

  apiUrl = "http://localhost:3000/monstres";

  // on déclare un fonction qui return la liste de monstres en tant qu'observable
  getAllMonstres() : Observable <Monstres[]> {
    return this.http.get<Monstres[]>(this.apiUrl).pipe(retry(1), catchError(this.handleError))
  }
  

  //Fonction pour retourver un monstre par son nom
  getMonstreByID (id: number): Observable <Monstres> {
    return this.http.get<Monstres>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction ajouter un monstre au tableau listeMonstres
  addMonstre(monstre: Monstres) : Observable <Monstres> {
    return this.http.post<Monstres>(this.apiUrl, monstre).pipe(catchError(this.handleError))
  }

  //Fonction pour éditer un monstre
  updateMonstre(monstre: Monstres) {
    return this.http.put<Monstres>(this.apiUrl + '/' + monstre.id, monstre).pipe(catchError(this.handleError))
  }

  deleteMonstre(id: number): Observable <Monstres> {
    return this.http.delete<Monstres>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
    }
}
