import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { HerosService } from 'src/app/services/heros.service';
import { MonstresService } from 'src/app/services/monstres.service';
import { Dieu } from 'src/app/models/dieu';
import { Monstres } from 'src/app/models/monstres';
import { Heros } from 'src/app/models/heros';
import { ApiService } from 'src/app/services/api.service';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { TypePerso } from 'src/app/models/type-perso';
import { Pantheons } from 'src/app/models/pantheons';
import { TypePersoService } from 'src/app/services/type-perso.service';
import { PantheonsService } from 'src/app/services/pantheons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filtreIsCollapsed = true;

  filtreDieu: boolean = false;


  rangsDieu = ['Majeur', 'Mineur'];


  // // On déclare une liste de perso vide
  listeDieux: Dieu[];
  listeDieuxFiltree: Dieu[];
  listeHeros: Heros[];
  listeMonstres: Monstres[];
  listeGenres: Genres[];
  listeTypePerso: TypePerso[];
  listePantheons: Pantheons[];

  genreFilter: string = "noData";
  pantheonFilter: string = "noData";
  typePersoFilter: string = "noData";


  cards = document.getElementsByClassName("card");
  listeCards = [];
  
  constructor(private dieuService: DieuxService, private herosService: HerosService, private monstreService: MonstresService, private apiService: ApiService, private genreService: GenresService, private typePersoService: TypePersoService, private pantheonsService: PantheonsService) { }
  
  ngOnInit(): void {

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.dieuService.getAllDieux().subscribe((data: Dieu[]) => {
      this.listeDieux = data;
      this.listeDieuxFiltree = this.listeDieux;
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.herosService.getAllHeros().subscribe((data: Heros[]) => {
      this.listeHeros = data;
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.monstreService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.listeMonstres = data;
    })

    // au chargement, on remplit la liste avec la fonction getAllGenres
    this.genreService.getAllGenres().subscribe((data: Genres[]) => {
      this.listeGenres = data;
      
    })

    // au chargement, on remplit la liste avec la fonction getAllTypes
    this.typePersoService.getAllTypes().subscribe((data: TypePerso[]) => {
      this.listeTypePerso = data;
    })

    // au chargement, on remplit la liste avec la fonction getAllPantheons
    this.pantheonsService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.listePantheons = data;
    })

  
  }

  // remettre les filtres à zéro
  unsetFilters() : void {
    this.genreFilter = "noData";
    this.pantheonFilter = "noData";

    this.getFilteredList();
  }

  // fonction pour afficher selon tous les filtres
  getFilteredList() : void {
    let list = this.listeDieux;

    if (this.genreFilter !== "noData") {
      list =  list.filter(dieu => dieu.genre === this.genreFilter);  
    }
    if (this.pantheonFilter !== "noData") {
      list =  list.filter(dieu => dieu.pantheon === this.pantheonFilter);  
    }
    // if (this.typePersoFilter !== "noData") {
    //   list =  list.filter(dieu => dieu.genre === this.typePersoFilter);  
    // }

    this.listeDieuxFiltree = list;

  }

  // affiche le critère 'rang du dieu' si 'Dieux' est sélectionné
  rangDieu() {
    if( (<HTMLInputElement>document.getElementById("typePersoFilter")).value == 'Dieux' ) {      
      this.filtreDieu = true;
    } else {
      this.filtreDieu = false;
    }
  }


}
