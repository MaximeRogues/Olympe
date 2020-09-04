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

  isLoading: boolean;


  rangsDieu = ['Majeur', 'Mineur'];


  // // On déclare une liste de perso vide
  godList: Dieu[];
  filteredGodList: Dieu[];
  heroList: Heros[];
  filteredHeroList: Heros[];
  monsterList: Monstres[];
  filteredMonsterList: Monstres[];
  genderList: Genres[];
  characterTypeList: TypePerso[];
  pantheonList: Pantheons[];

  genderFilter: string = "noData";
  pantheonFilter: string = "noData";
  characterTypeFilter: string = "noData";
  
  constructor(private godService: DieuxService, private herosService: HerosService, private monsterService: MonstresService, private apiService: ApiService, private genreService: GenresService, private typePersoService: TypePersoService, private pantheonsService: PantheonsService) { }
  
  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    console.log(this.isLoading);
    

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.godService.getAllDieux().subscribe((data: Dieu[]) => {
      this.godList = data['hydra:member'];
      this.filteredGodList = data['hydra:member'];
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.herosService.getAllHeros().subscribe((data: Heros[]) => {
      this.heroList = data['hydra:member'];
      this.filteredHeroList = data['hydra:member'];      
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.monsterService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.monsterList = data['hydra:member'];
      this.filteredMonsterList = data['hydra:member'];
    })

    // au chargement, on remplit la liste avec la fonction getAllGenres
    this.genreService.getAllGenres().subscribe((data: Genres[]) => {
      this.genderList = data['hydra:member'];
    })

    // au chargement, on remplit la liste avec la fonction getAllTypes
    this.typePersoService.getAllTypes().subscribe((data: TypePerso[]) => {
      this.characterTypeList = data['hydra:member'];
    })

    // au chargement, on remplit la liste avec la fonction getAllPantheons
    this.pantheonsService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheonList = data['hydra:member'];
    })

    this.isLoading = false;    
  }

  // remettre les filtres à zéro
  unsetFilters() : void {
    this.genderFilter = "noData";
    this.pantheonFilter = "noData";
    this.characterTypeFilter = "noData"
    this.getFilteredList();
  }

  // fonction pour afficher selon tous les filtres
  getFilteredList() : void {
    // TODO optimiser cette fonction
    let godListToFilter = this.godList;
    let heroListToFilter = this.heroList;
    let monsterListToFilter = this.monsterList;

    // tri par genre
    if (this.genderFilter !== "noData") {
      console.log(this.genderFilter);
      
      godListToFilter =  godListToFilter.filter(god => god.gender.name === this.genderFilter);  
      heroListToFilter =  heroListToFilter.filter(heros => heros.gender.name === this.genderFilter);  
      monsterListToFilter =  monsterListToFilter.filter(monstre => monstre.gender.name === this.genderFilter);       
    }

    // tri par panthéon
    if (this.pantheonFilter !== "noData") {
      godListToFilter =  godListToFilter.filter(dieu => dieu.pantheon.name === this.pantheonFilter);  
      heroListToFilter =  heroListToFilter.filter(heros => heros.pantheon.name === this.pantheonFilter);  
      monsterListToFilter =  monsterListToFilter.filter(monstre => monstre.pantheon.name === this.pantheonFilter);  
    }

    // tri par type de perso
    if (this.characterTypeFilter !== "noData") {
      if(this.characterTypeFilter == "Dieux") {
        heroListToFilter = [];
        monsterListToFilter = [];
      } else if(this.characterTypeFilter == "Héros") {
        godListToFilter = [];
        monsterListToFilter = [];
      } else  if(this.characterTypeFilter == "Monstres"){
        heroListToFilter = [];
        godListToFilter = [];
      }
    }

    this.filteredGodList = godListToFilter;
    this.filteredHeroList = heroListToFilter;
    this.filteredMonsterList = monsterListToFilter;
  }

  // affiche le critère 'rang du dieu' si 'Dieux' est sélectionné
  rangDieu() {
    if( (<HTMLInputElement>document.getElementById("characterTypeFilter")).value == 'Dieux' ) {      
      this.filtreDieu = true;
    } else {
      this.filtreDieu = false;
    }
  }


}