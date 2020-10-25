import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { GenresService } from 'src/app/services/genres.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UploadService } from 'src/app/services/upload.service';


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
  file: File;

  constructor(private heroService: HerosService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService, private upload: UploadService) { }

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
    
    // on déclare un new Heros vide
    this.hero = new Heros();
    this.isLoading = false;
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log('Image récupérée : ' + this.file.name);
  }

  submitHero() {
  let formData = new FormData();
  formData.append('file', this.file);
  this.hero.picture = this.file.name;

  this.upload.uploadFile(formData);
  // fonction de heros.service pour push un héros dans la liste
  this.heroService.addHero(this.hero).subscribe(then => {
    // naviguer vers la page héros
    this.router.navigate(['/heros']);
  })
  this.toastr.success('Prenez garde si vous êtes un monstre...','Un nouveau héros s\'élève !')
  }
}
