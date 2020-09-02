import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { Dieu } from 'src/app/models/dieu';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';

@Component({
  selector: 'app-add-dieux',
  templateUrl: './add-dieux.component.html',
  styleUrls: ['./add-dieux.component.css']
})
export class AddDieuxComponent implements OnInit {

  dieu: Dieu;
  isLoading: boolean;

  pantheons : Pantheons[];

  genders : Genres[];


  constructor(private dieuxService: DieuxService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenres().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    // on déclare un dieu vide
    this.dieu = new Dieu();    
    this.isLoading = false;
  }

  submitDieux() {
  //lance la fonction addDieu de dieux.service
  this.dieuxService.addDieu(this.dieu).subscribe(then => {
    // change l'url avec la route '/dieux'
    this.router.navigate(['/dieux']);
  });
  this.toastr.success('Ajoutez un siège sur l\'Olympe !','Quoi ?! Un nouveau dieu !')
  }
  
}
