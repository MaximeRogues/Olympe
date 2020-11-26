import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-heros-detail',
  templateUrl: './heros-detail.component.html',
  styleUrls: ['./heros-detail.component.css']
})
export class HerosDetailComponent implements OnInit {
  id: number;
  hero: Heros;
  heroList: Heros[];
  isLoading: boolean;
  logged: boolean = false;

  constructor(private route: ActivatedRoute, private heroService: HerosService, private toastr: ToastrService, private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    // on récupère le dieu qui était concerné par le bouton détails
    this.isLoading = true;
    this.heroService.getHeroByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Heros) => {
      this.hero = data;
      this.isLoading = false;
    });

    // au chargement, on remplit la liste avec la fonction getAllHeros, pour afficher la liste au retour
    this.heroService.getAllHeroes().subscribe((data: Heros[]) => {
      this.heroList = data['hydra:member'];
    })

    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };    
  }

  deleteHero(id: number) {
    this.isLoading = true;
    const heroName = this.heroList.find(heros => heros.id === id).name
    this.heroService.deleteHero(id).subscribe();
    this.heroService.getAllHeroes().subscribe((data: Heros []) => {
      this.heroList = data['hydra:member'];
    })
    this.router.navigate(['/heros']);
    this.isLoading = false;
    this.toastr.success(heroName + ' est parti(e) pour les Champs Élysées...', 'Préparez vos offrandes !');
    
  }
}
