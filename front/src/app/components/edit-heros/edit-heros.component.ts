import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { Heros } from 'src/app/models/heros';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';

@Component({
  selector: 'app-edit-heros',
  templateUrl: './edit-heros.component.html',
  styleUrls: ['./edit-heros.component.css']
})
export class EditHerosComponent implements OnInit {
  id: number;
  hero: Heros;
  isLoading: boolean;

  pantheons : Pantheons[];

  genders : Genres[];

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HerosService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenres().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.heroService.getHerosByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Heros) => {
      this.hero = data;
      this.isLoading = false;
    });  }


  updateHeros() {
    //lance la fonction updateHeros de heros.service
    this.heroService.updateHeros(this.hero).subscribe(then => {
      // change l'url avec la route '/heros'
      this.router.navigate(['/heros']);
      });
    }

}
