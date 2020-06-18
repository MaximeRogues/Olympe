import { Component, OnInit } from '@angular/core';
import { DieuxService } from 'src/app/services/dieux.service';
import { Dieu } from 'src/app/models/dieu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dieux',
  templateUrl: './add-dieux.component.html',
  styleUrls: ['./add-dieux.component.css']
})
export class AddDieuxComponent implements OnInit {

  dieu: Dieu;

  constructor(private dieuxService: DieuxService, private router: Router) { }

  ngOnInit(): void {
    this.dieu = new Dieu();
  }

  submitDieux(): void {
  //   this.dieuxService.addDieu(this.dieu);
  //   this.router.navigate(['/dieux']);
  
  console.log(this.dieu);
  
   }

  
}
