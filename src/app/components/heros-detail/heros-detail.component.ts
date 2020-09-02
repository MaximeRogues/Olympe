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
  heros: Heros;
  listeHeros: Heros[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private herosService: HerosService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    // on récupère le dieu qui était concerné par le bouton détails
    this.isLoading = true;
    this.herosService.getHerosByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Heros) => {
      this.heros = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros, pour afficher la liste au retour
    this.herosService.getAllHeros().subscribe((data: Heros[]) => {
      this.listeHeros = data['hydra:member'];
      this.isLoading = false;
    })
  }

  deleteHeros(id: number) {
    this.isLoading = true;
    const nomHeros = this.listeHeros.find(heros => heros.id === id).name
    this.herosService.deleteHeros(id).subscribe(then => {
      this.herosService.getAllHeros().subscribe((data: Heros []) => {
        this.listeHeros = data['hydra:member'];
        this.isLoading = false;
      })
    });
    this.router.navigate(['/heros']);
    this.toastr.success(nomHeros + ' est parti(e) pour les Champs Élysées...', 'Préparez vos offrandes !');
    
  }
}
