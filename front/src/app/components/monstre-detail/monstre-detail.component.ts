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
  monster: Monstres;
  isLoading: boolean;
  monsterList: Monstres[];

  constructor(private route: ActivatedRoute, private monsterService: MonstresService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.monsterService.getMonstreByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Monstres) => {
      this.monster = data;
      console.log(this.monster);
      
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.monsterService.getAllMonstres().subscribe((data: Monstres[]) => {
      this.monsterList = data['hydra:member'];
      this.isLoading = false
    })
  }

  deleteMonstre(id: number) {
    this.isLoading = true;
    const nomMonstre = this.monsterList.find(monstre => monstre.id === id).name
    this.monsterService.deleteMonstre(id).subscribe();
    this.monsterService.getAllMonstres().subscribe((data: Monstres []) => {
      this.monsterList = data['hydra:member'];
    });
    this.router.navigate(['/monstres']);
    this.isLoading = false;
    this.toastr.success(nomMonstre + ' a été envoyé(e) au Tartare', 'Heraclès s\'ennuyait...');
    
  }

}
