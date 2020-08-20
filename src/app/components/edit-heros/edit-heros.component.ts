import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { Heros } from 'src/app/models/heros';

@Component({
  selector: 'app-edit-heros',
  templateUrl: './edit-heros.component.html',
  styleUrls: ['./edit-heros.component.css']
})
export class EditHerosComponent implements OnInit {
  id: number;
  heros: Heros;
  isLoading: boolean;

  pantheons = ['Grec', 'Egyptien', 'Nordique'];

  genres = ['Féminin', 'Masculin', 'Non défini'];

  constructor(private route: ActivatedRoute, private router: Router, private herosService: HerosService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.herosService.getHerosByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Heros) => {
      this.heros = data;
      this.isLoading = false;
    });  }


  updateHeros() {
    //lance la fonction updateHeros de heros.service
    this.herosService.updateHeros(this.heros).subscribe(then => {
      // change l'url avec la route '/heros'
      this.router.navigate(['/heros']);
      });
    }

}
