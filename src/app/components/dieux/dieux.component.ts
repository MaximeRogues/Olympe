import { Component, OnInit } from '@angular/core';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';


@Component({
  selector: 'app-dieux',
  templateUrl: './dieux.component.html',
  styleUrls: ['./dieux.component.css']
})
export class DieuxComponent implements OnInit {

  // On déclare une liste de dieux vide
  godList: Dieu[];
  isLoading : boolean;
  
  constructor(private dieuService: DieuxService) { }
  
  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.dieuService.getAllDieux().subscribe((data: Dieu[]) => {
      this.godList = data['hydra:member'];
      this.isLoading = false
    })
  }

  
}
