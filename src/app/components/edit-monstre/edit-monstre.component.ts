import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { Monstres } from 'src/app/models/monstres';

@Component({
  selector: 'app-edit-monstre',
  templateUrl: './edit-monstre.component.html',
  styleUrls: ['./edit-monstre.component.css']
})
export class EditMonstreComponent implements OnInit {
  id: number;
  monstre: Monstres;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private monstreService: MonstresService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.monstreService.getMonstreByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Monstres) => {
      this.monstre = data;
      this.isLoading = false;
    });  }


  updateMonstre() {
    //lance la fonction updateMonstre de monstre.service
    this.monstreService.updateMonstre(this.monstre).subscribe(then => {
      // change l'url avec la route '/monstre'
      this.router.navigate(['/monstres']);
      });
    }

}
