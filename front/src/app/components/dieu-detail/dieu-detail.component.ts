import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-dieu-detail',
  templateUrl: './dieu-detail.component.html',
  styleUrls: ['./dieu-detail.component.css']
})
export class DieuDetailComponent implements OnInit {
  
  id: number;
  god: Dieu;
  godList: Dieu[];
  isLoading: boolean;
  logged: boolean = false;

  constructor(private route: ActivatedRoute, private godService: DieuxService, private toastr: ToastrService,private router: Router, private tokenStorageService: TokenStorageService) { 

  }
  
  ngOnInit(): void {
    // on récupère le dieu qui était concerné par le bouton détails
    this.isLoading = true;
    this.godService.getGodByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Dieu) => {      
      this.god = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros, pour afficher la liste au retour
    this.godService.getAllGods().subscribe((data: Dieu[]) => {
      this.godList = data['hydra:member'];
      this.isLoading = false
    })

    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };
  }

  deleteGod(id: number) {
    this.isLoading = true;
    const godName = this.godList.find(god => god.id === id).name
    this.godService.deleteGod(id).subscribe();
    this.godService.getAllGods().subscribe((data: Dieu []) => {
      this.godList = data['hydra:member'];
      
    });
    this.router.navigate(['/dieux']);
    this.isLoading = false;
    this.toastr.success(godName + ' a été supprimé(e)', 'Je crois que Kratos est passé par là...');
    
  }
  
}
