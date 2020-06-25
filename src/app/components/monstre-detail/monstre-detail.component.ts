import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-monstre-detail',
  templateUrl: './monstre-detail.component.html',
  styleUrls: ['./monstre-detail.component.css']
})
export class MonstreDetailComponent implements OnInit {

  id: number;
  monstre: Monstres;
  isLoading: boolean;
  listeMonstres: Monstres[];

  constructor(private route: ActivatedRoute, private monstreService: MonstresService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.monstreService.getMonstreByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Monstres) => {
      this.monstre = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.monstreService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.listeMonstres = data;
      this.isLoading = false
    })
  }

  deleteMonstre(id: number) {
    this.isLoading = true;
    const nomMonstre = this.listeMonstres.find(monstre => monstre.id === id).nom
    this.monstreService.deleteMonstre(id).subscribe(then => {
      this.monstreService.getAllMonstres().subscribe((data: Monstres []) => {
        this.listeMonstres = data;
        this.isLoading = false;
      })
    });
    this.router.navigate(['/monstres']);
    this.toastr.success(nomMonstre + ' a été envoyé(e) au Tartare', 'Heraclès s\'ennuyait...');
    
  }

}
