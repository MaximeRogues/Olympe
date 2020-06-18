import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';

@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent implements OnInit {

  // On déclare une liste de dieux vide
  listeMonstres: Monstres[];

  constructor(private monstreService: MonstresService) { }

  ngOnInit(): void {

    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.listeMonstres = this.monstreService.getAllMonstres();
  }

}
