import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { Monstres } from 'src/app/models/monstres';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { Pantheons } from 'src/app/models/pantheons';
import { PantheonsService } from 'src/app/services/pantheons.service';

@Component({
  selector: 'app-edit-monstre',
  templateUrl: './edit-monstre.component.html',
  styleUrls: ['./edit-monstre.component.css']
})
export class EditMonstreComponent implements OnInit {
  id: number;
  monster: Monstres;
  isLoading: boolean;

  pantheons : Pantheons[];

  genders : Genres[];

  constructor(private route: ActivatedRoute, private router: Router, private monsterService: MonstresService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.monsterService.getMonsterByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Monstres) => {
      this.monster = data;
      this.isLoading = false;
    });  
  }


  updateMonster() {
    //lance la fonction updateMonstre de monstre.service
    this.monsterService.updateMonster(this.monster).subscribe(then => {
      // change l'url avec la route '/monstre'
      this.router.navigate(['/monstres']);
      });
    }

}
