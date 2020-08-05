import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { HerosService } from 'src/app/services/heros.service';
import { MonstresService } from 'src/app/services/monstres.service';
import { Perso } from 'src/app/models/perso';
import { Dieu } from 'src/app/models/dieu';
import { Monstres } from 'src/app/models/monstres';
import { Heros } from 'src/app/models/heros';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filtreIsCollapsed = true;

  filtreDieu: boolean = false;

  typePerso = ['Dieux', 'Héros', 'Monstres'];

  rangsDieu = ['Majeur', 'Mineur'];

  pantheons = ['Grec', 'Egyptien', 'Nordique'];

  genres = ['Féminin', 'Masculin', 'Non défini'];

  // // On déclare une liste de perso vide
  listeDieux: Dieu[];
  listeHeros: Heros[];
  listeMonstres: Monstres[];

  cards = document.getElementsByClassName("card");
  listeCards = [];
  
  constructor(private dieuService: DieuxService, private herosService: HerosService, private monstreService: MonstresService, private apiService: ApiService) { }
  
  ngOnInit(): void {

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.dieuService.getAllDieux().subscribe((data: Dieu[]) => {
      this.listeDieux = data;
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.herosService.getAllHeros().subscribe((data: Heros[]) => {
      this.listeHeros = data;
    })

    // au chargement, on remplit la liste avec la fonction getAllPerso
    this.monstreService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.listeMonstres = data;
    })

  
  }

  // remettre les filtres à zéro
  unsetFilters() {
    (<HTMLInputElement>document.getElementById("typePersoFilter")).value = "noData";
    (<HTMLInputElement>document.getElementById("pantheonFilter")).value = "noData";
    (<HTMLInputElement>document.getElementById("genreFilter")).value = "noData";
  }

  // trier par nom de Dieu
  tri() {
    console.log("tri");
    // met toutes les cards dans un tableau
    [].forEach.call(this.cards, card => {
      this.listeCards.push(card);
    }) 

    console.log(this.listeCards);

    // met toutes les cards dans la div #listePersos
    this.listeCards.forEach(card => {
      document.getElementById('listePersos').appendChild(card)
      console.log(card.className);
      
    });
    
    
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
