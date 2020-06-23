import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-monstres',
  templateUrl: './monstres.component.html',
  styleUrls: ['./monstres.component.css']
})
export class MonstresComponent implements OnInit {

  // On déclare une liste de monstres vide
  listeMonstres: Monstres[];

  constructor(private monstreService: MonstresService, private toastr: ToastrService) { }

  ngOnInit(): void {

    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.listeMonstres = this.monstreService.getAllMonstres();
  }

  deleteMonstre(monstre: Monstres) {
    this.listeMonstres = this.monstreService.deleteMonstre(monstre);
    this.toastr.success(monstre.nom + ' a été supprimé', 'Heraclès s\'ennuyait...');
    
  }
}
