import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent implements OnInit {

  // On déclare une liste de monstres vide
  monsterList: Monstres[];
  isLoading: boolean;
  logged: boolean;

  constructor(private monstreService: MonstresService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;

    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };

    // au chargement, on remplit la liste avec la fonction getAllMonsters
    this.monstreService.getAllMonsters().subscribe((data: Monstres[]) => {
      this.monsterList = data['hydra:member'];
      this.isLoading = false
    })
    
  }

}
