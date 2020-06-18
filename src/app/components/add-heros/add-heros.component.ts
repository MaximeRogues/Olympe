import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-heros',
  templateUrl: './add-heros.component.html',
  styleUrls: ['./add-heros.component.css']
})
export class AddHerosComponent implements OnInit {

  heros: Heros;

  constructor(private herosService: HerosService, private router: Router) { }

  ngOnInit(): void {
    this.heros = new Heros();
  }

  submitHeros() {
  //   this.herosService.addHeros(this.heros);
  //   this.router.navigate(['/heros']);
  
    console.log(this.heros)
  }
}
