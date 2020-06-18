import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  // on déclare une liste de héros vide
  listeHeros: Heros[];

  constructor(private herosService: HerosService) { }

  ngOnInit(): void {

    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.listeHeros = this.herosService.getAllHeros();
  }

  
}
