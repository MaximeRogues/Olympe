import { Injectable } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class HerosService {
  
  


// On crée un tableau avec les instances de Heros
  listeHeros = [
    new Heros(1, 'Héraclès', 'Fils de Zeus et d\'Alcmène', 'Les douzes Travaux qui portent son nom: Il a tué l\'hydre de Lerne, le lion de Némée, capturé le sanglier d\'Erymanthe, vaincu la biche de Cérynie, tué les oiseaux du lac Stymphale, capturé le taureau de Minos, dompté les juments de Diomède, ramené la ceinture d\'or d\'Hippolyte, nettoyé les écuries d\'Augias (en détournant un fleuve...), volé les oeufs de Géryon ainsi que les pommes d\'or du jradin des Hespérides et sorti Cerbère des Enfers ', 'heracles.jpg'),

    new Heros(2, 'Circé', 'Fille d\'Hélios et de l\'océanide Perséis', 'Experte en potions et en poisons, elle a accueilli l\'équipage d\'Ulysse et les a transformé en animaux. Elle hébergea Ulysse pendant un an sur son île et l\'aida à préparer la suite de son voyage', 'circe.jpg'),

    new Heros(3, 'Thésée', 'Fils du roi Egée et d\'Ethra ', 'Il a vaincu le Minotaure qui terrorisait la Crête à l\'aide d\'une pelote de fil confiée par Ariane pour qu\'il puisse se retrouver dans le labyrinthe. Il devient le roi d\Athènes après cet exploit', 'thesee.jpg'),

    new Heros(4, 'Persée', 'Fils de Danaé(fille du roi d\'Argos)', 'Il a vaincu la gorgone Méduse en lui tranchant la tête. Le sang qui se retrouva sur le sol donna naissance au cheval ailé Pégase. Il a également sauvé Andromède, en proie à un monstre marin envoyé par Poséidon', 'persee.jpg'),

    new Heros(5, 'Ulysse', 'Fils de Laërte et d\'Anticlée', 'Roi d\'Ithaque, il est le héros de l\'Odyssée. Il a vaincu le cyclope Polyphème, résisté aux sirènes, il a affronté Circé et est même allé aux Enfers avant de rentrer et reprendre son trône', 'ulysse.jpg'),

    new Heros(6, 'Achille', 'Fils de Pélée (roi de Phthie) et de le néréide Thétis', 'Sa mère le trempa dans le Styx en le tenant par le talon, afin de le rendre invincible. Il fut cependant tué d\'une flèche dans le talon par Pâris durant la guerre de Troie', 'achille.jpg'),

    new Heros(7, 'Atalante', 'Fille d\'Iasos (roi du Péloponnèse) et de Clymène (fille de Minyas)', 'Chasseuse redoutable, elle a abattu le sanglier de Calydon, ainsi que deux centaures qui tentaient d\abuser d\'elle. Elle fut la seule femme à faire partie des Argonautes', 'atalante.jpg'),

    new Heros(8, 'Œdipe', 'Fils de Laïos et de Jocaste (roi et reine de Thèbes)', 'Un oracle ayant prédit qu\'il tuerait son père avant d\'épouser sa mère, il est caché de ses parents à la naissance. Il finira par vaincre le terrible Sphinx et accomplir l\'oracle en tuant son père et en devenant roi de Thèbes à son tour. Il est le père d\'Antigone', 'oedipe.jpg' ),

    new Heros(9, 'Bellérophon', 'Fils de Glaucos (donc petit-fils de Sisyphe) et de Eurynomé', 'Chassé de chez lui après avoir involontairement tué son frère lors d\'un lancer de disque (oui), il chevauchera Pégase pour tuer la chimère, en lui jetant une lance à la pointe de plomb dans la gueule, qui fit fondre ses entrailles', 'bellerophon.png'),

    new Heros(10, 'Orphée', 'Fils du roi Œagre et de la muse Calliope', 'Après que sa fiancée Eurydice soit descendue aux Enfers après s\'être fait mordre par un serpent, Orphée part la chercher en endormant Cerbère à l\'aide de sa musique. Il convaint Hadès de lui rendre Eurydice, à la condition qu\'il ne la regarde pas avant d\être ressorti, Orphée ne résiste pas à la tentation et se retourne pour la voir, de peur qu\'elle ait disparu, et la perd pour toujours', 'orphee.jpg'),

    new Heros(11, 'Jason', 'Fils d\'Eson (roi d\'Iolcos) et de Polymédé', 'Elevé par le centaure Chiron, il se lança dans la quête de la toison d\'or avec un équipage de fiers guerriers, après de rudes épreuves, il déroba la toison au dragon qui la gardait avec l\'aide de la magicienne Médée', 'jason.jpg'),

    new Heros(12, 'Médée', 'Fille d\'Eétès (roi de Colchide) et de l\'océanide Idyie, elle est la nièce de Circé', 'Magicienne aux grands pouvoirs, elle fournit une pommade à Jason pour le rendre invincible et qu\il puisse réussir les épreuves que le roi lui a imposé pour obtenir la toison d\'or. Elle tend un piège aux filles du roi d\Iolcos qui le tueront par mégarde, permettant à Jason de reprendre le trône', 'medee.jpg')
  ];

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

  apiUrl = "http://localhost:3000/heros";

  // on déclare un fonction qui return la liste de héros en tant qu'observable
  getAllHeros(): Observable <Heros[]> {
    return this.http.get<Heros[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError))
  } 

  //Fonction pour retrouver un heros par son nom
  getHerosByID (id: number): Observable <Heros> {
    return this.http.get<Heros>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un heros au tableau listeheros
  addHeros(heros: Heros) : Observable <Heros> {
    return this.http.post<Heros>(this.apiUrl, heros).pipe(catchError(this.handleError))
  }

  //Fonction pour éditer un heros
  updateHeros(heros: Heros) {
    return this.http.put<Heros>(this.apiUrl + '/' + heros.id, heros).pipe(catchError(this.handleError))
  }

  // Fonction pour supprimer un héros du tableau listeHeros
  deleteHeros(id: number): Observable <Heros> {
    return this.http.delete<Heros>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
    }
}
