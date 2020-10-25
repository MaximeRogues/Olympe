import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { Dieu } from 'src/app/models/dieu';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-add-dieux',
  templateUrl: './add-dieux.component.html',
  styleUrls: ['./add-dieux.component.css']
})
export class AddDieuxComponent implements OnInit {

  god: Dieu;
  isLoading: boolean;
  pantheons : Pantheons[];
  genders : Genres[];
  file: File;

  constructor(private godService: DieuxService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService, private upload: UploadService) { }

  ngOnInit(): void {
    this.isLoading = true;

    if(!this.tokenStorageService.getToken()) {
      this.router.navigate(['/dieux']);
    };    

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    // on déclare un dieu vide
    this.god = new Dieu();    
    this.isLoading = false;
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log('Image récupérée : ' + this.file.name);
  }

  submitGod() {
    let formData = new FormData();
    formData.append('file', this.file);
    this.god.picture = this.file.name;
    
    this.upload.uploadFile(formData);
    //lance la fonction addDieu de dieux.service
    this.godService.addGod(this.god).subscribe(then => {
      // change l'url avec la route '/dieux'
      this.router.navigate(['/dieux']);
    });
    this.toastr.success('Ajoutez un siège sur l\'Olympe !','Quoi ?! Un nouveau dieu !')
    }
  
  
}
