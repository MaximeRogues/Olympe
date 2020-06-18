import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-monstres',
  templateUrl: './add-monstres.component.html',
  styleUrls: ['./add-monstres.component.css']
})
export class AddMonstresComponent implements OnInit {

  monstre: Monstres;

  constructor(private monstreService: MonstresService, private router: Router) { }

  ngOnInit(): void {
    this.monstre = new Monstres();
  }

  submitMonstre(): void {
    //   this.monstreService.addMonstre(this.monstre);
    //   this.router.navigate(['/monstres']);
    
    console.log(this.monstre);
    
     }

}
