import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { Dieu } from 'src/app/models/dieu';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-dieux',
  templateUrl: './add-dieux.component.html',
  styleUrls: ['./add-dieux.component.css']
})
export class AddDieuxComponent implements OnInit {

  dieu: Dieu;

  constructor(private dieuxService: DieuxService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // on déclare un dieu vide
    this.dieu = new Dieu();
  }

  submitDieux(): void {
    //lance la fonction addDieu de dieux.service
  this.dieuxService.addDieu(this.dieu);
  // change l'url avec la route '/dieux'
  this.router.navigate(['/dieux']);
  
  this.toastr.success('Ajoutez un siège sur l\'Olympe !','Quoi ?! Un nouveau dieu !')
  
   }

  
}
