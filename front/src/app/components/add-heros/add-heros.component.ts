import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { GenresService } from 'src/app/services/genres.service';


@Component({
  selector: 'app-add-heros',
  templateUrl: './add-heros.component.html',
  styleUrls: ['./add-heros.component.css']
})
export class AddHerosComponent implements OnInit {

  hero: Heros;
  isLoading: boolean;

  pantheons : Pantheons[];

  genders : Genres[];

  constructor(private heroService: HerosService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });
    
    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });
    
    // on déclare un new Heros vide
    this.hero = new Heros();
    this.isLoading = false;
  }

  submitHero() {
  // fonction de heros.service pour push un héros dans la liste
  this.heroService.addHero(this.hero).subscribe(then => {
    // naviguer vers la page héros
    this.router.navigate(['/heros']);
  })
  this.toastr.success('Prenez garde si vous êtes un monstre...','Un nouveau héros s\'élève !')
  }
}
