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
  monsterList: Monstres[];
  isLoading: boolean;

  constructor(private monstreService: MonstresService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllMonstres
    this.monstreService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.monsterList = data['hydra:member'];
      this.isLoading = false
    })
  }

  deleteMonstre(id: number) {
    this.isLoading = true;
    const nomMonstre = this.monsterList.find(monster => monster.id === id).name
    this.monstreService.deleteMonstre(id).subscribe(then => {
      this.monstreService.getAllMonstres().subscribe((data: Monstres []) => {
        this.monsterList = data['hydra:member'];
        this.isLoading = false;
      })
    });
    this.toastr.success(nomMonstre + ' a été envoyé au Tartare', 'Heraclès s\'ennuyait...');
    
  }
}
