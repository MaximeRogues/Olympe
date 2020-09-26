import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  logged: boolean = false;

  constructor(private route: ActivatedRoute, private monsterService: MonstresService, private toastr: ToastrService,private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.monsterService.getMonsterByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Monstres) => {
      this.monster = data;      
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.monsterService.getAllMonsters().subscribe((data: Monstres[]) => {
      this.monsterList = data['hydra:member'];
      this.isLoading = false
    })

    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };
  }

  deleteMonstre(id: number) {
    this.isLoading = true;
    const monsterName = this.monsterList.find(monstre => monstre.id === id).name
    this.monsterService.deleteMonster(id).subscribe();
    this.monsterService.getAllMonsters().subscribe((data: Monstres []) => {
      this.monsterList = data['hydra:member'];
    });
    this.router.navigate(['/monstres']);
    this.isLoading = false;
    this.toastr.success(monsterName + ' a été envoyé(e) au Tartare', 'Heraclès s\'ennuyait...');
    
  }

}
