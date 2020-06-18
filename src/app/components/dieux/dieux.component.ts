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
  listeDieux: Dieu[];

  constructor(private dieuService: DieuxService) {
    
   }
  
  ngOnInit(): void {
        
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.listeDieux = this.dieuService.getAllDieux();
  }

  
}
