import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dieu-detail',
  templateUrl: './dieu-detail.component.html',
  styleUrls: ['./dieu-detail.component.css']
})
export class DieuDetailComponent implements OnInit {
  id: number;
  dieu: Dieu;
  listeDieux: Dieu[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private dieuService: DieuxService, private toastr: ToastrService,private router: Router) { 

  }
  
  ngOnInit(): void {
    // on récupère le dieu qui était concerné par le bouton détails
    this.isLoading = true;
    this.dieuService.getDieuByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:Dieu) => {
      this.dieu = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros, pour afficher la liste au retour
    this.dieuService.getAllDieux().subscribe((data: Dieu[]) => {
      this.listeDieux = data;
      this.isLoading = false
    })
  }

  deleteDieu(id: number) {
    this.isLoading = true;
    const nomDieu = this.listeDieux.find(dieu => dieu.id === id).nom
    this.dieuService.deleteDieu(id).subscribe(then => {
      this.dieuService.getAllDieux().subscribe((data: Dieu []) => {
        this.listeDieux = data;
        this.isLoading = false;
      })
    });
    this.router.navigate(['/dieux']);
    this.toastr.success(nomDieu + ' a été supprimé(e)', 'Je crois que Kratos est passé par là...');
    
  }
  
}
