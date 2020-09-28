import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  // on déclare une liste de héros vide
  heroList: Heros[];
  isLoading: boolean;
  logged: boolean;

  constructor(private heroService: HerosService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;

    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };

    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.heroService.getAllHeroes().subscribe((data: Heros[]) => {
      this.heroList = data['hydra:member'];
      this.isLoading = false
    })
  }

 
}
