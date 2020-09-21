import { Component, OnInit } from '@angular/core';
import { Dieu } from 'src/app/models/dieu';
import { User } from 'src/app/models/user';
import { DieuxService } from 'src/app/services/dieux.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-dieux',
  templateUrl: './dieux.component.html',
  styleUrls: ['./dieux.component.css']
})
export class DieuxComponent implements OnInit {

  // On déclare une liste de dieux vide
  godList: Dieu[];
  isLoading : boolean;
  
  constructor(private godService: DieuxService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(): void {
    
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.godService.getAllGods().subscribe((data: Dieu[]) => {
      this.godList = data['hydra:member'];

    })

    this.isLoading = false
  }

  
}
