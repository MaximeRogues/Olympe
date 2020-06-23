import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-monstres',
  templateUrl: './add-monstres.component.html',
  styleUrls: ['./add-monstres.component.css']
})
export class AddMonstresComponent implements OnInit {

  monstre: Monstres;

  constructor(private monstreService: MonstresService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.monstre = new Monstres();
  }

  submitMonstre(): void {
    // fonction de monstre.service pour push un monstre dans la liste
    this.monstreService.addMonstre(this.monstre);
    // naviguer vers la page monstres
    this.router.navigate(['/monstres']);    

    this.toastr.success('Aiguisez vos armes !','Un nouveau monstre sème la terreur !')

     }

}
