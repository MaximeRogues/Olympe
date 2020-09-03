import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private route: ActivatedRoute, private heroService: HerosService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    // on récupère le dieu qui était concerné par le bouton détails
    this.isLoading = true;
    this.heroService.getHerosByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Heros) => {
      this.hero = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros, pour afficher la liste au retour
    this.heroService.getAllHeros().subscribe((data: Heros[]) => {
      this.heroList = data['hydra:member'];
      this.isLoading = false;
    })
    
    
  }

  deleteHero(id: number) {
    this.isLoading = true;
    const heroName = this.heroList.find(heros => heros.id === id).name
    this.heroService.deleteHeros(id).subscribe();
    this.heroService.getAllHeros().subscribe((data: Heros []) => {
      this.heroList = data['hydra:member'];
    })
    this.router.navigate(['/heros']);
    this.isLoading = false;
    this.toastr.success(heroName + ' est parti(e) pour les Champs Élysées...', 'Préparez vos offrandes !');
    
  }
}
