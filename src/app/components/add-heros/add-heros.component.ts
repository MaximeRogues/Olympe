import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-heros',
  templateUrl: './add-heros.component.html',
  styleUrls: ['./add-heros.component.css']
})
export class AddHerosComponent implements OnInit {

  heros: Heros;
  isLoading: boolean;

  pantheons = ['Grec', 'Egyptien', 'Nordique'];

  genres = ['Féminin', 'Masculin', 'Non défini'];

  constructor(private herosService: HerosService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    // on déclare un new Heros vide
    this.heros = new Heros();
    this.isLoading = false;
  }

  submitHeros() {
  // fonction de heros.service pour push un héros dans la liste
  this.herosService.addHeros(this.heros).subscribe(then => {
    // naviguer vers la page héros
    this.router.navigate(['/heros']);
  })
  this.toastr.success('Prenez garde si vous êtes un monstre...','Un nouveau héros s\'élève !')
  }
}
