import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { Pantheons } from 'src/app/models/pantheons';
import { PantheonsService } from 'src/app/services/pantheons.service';


@Component({
  selector: 'app-add-monstres',
  templateUrl: './add-monstres.component.html',
  styleUrls: ['./add-monstres.component.css']
})
export class AddMonstresComponent implements OnInit {

  monster: Monstres;
  isLoading: boolean;

  pantheons : Pantheons[];
  
  genders : Genres[];

  constructor(private monsterService: MonstresService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });
    
    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });  
      // on déclare un new Monstres vide
    this.monster = new Monstres();
    this.isLoading = true;
  }

  submitMonster() {
  // fonction de monstre.service pour push un monstre dans la liste
  this.monsterService.addMonster(this.monster).subscribe(then => {
    // naviguer vers la page monstres
    this.router.navigate(['/monstres']);   
  })
  this.toastr.success('Aiguisez vos armes !','Un nouveau monstre sème la terreur !')
  }

}
