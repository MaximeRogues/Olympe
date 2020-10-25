import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { Heros } from 'src/app/models/heros';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UploadService } from 'src/app/services/upload.service';

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
  file: File;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HerosService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService, private upload: UploadService) { }

  ngOnInit(): void {
    this.isLoading = true;

    if(!this.tokenStorageService.getToken()) {
      this.router.navigate(['/heros']);
    };

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.heroService.getHeroByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Heros) => {
      this.hero = data;
      this.isLoading = false;
    });  
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log('Image récupérée : ' + this.file.name);
  }

  updateHero() {
    let formData = new FormData();
    formData.append('file', this.file);
    this.hero.picture = this.file.name;
    
    //lance la fonction updateHeros de heros.service
    this.heroService.updateHero(this.hero).subscribe(then => {
      // change l'url avec la route '/heros'
      this.router.navigate(['/heros']);
      });
    }

}
