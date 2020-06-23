import { Component, OnInit } from '@angular/core';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dieux',
  templateUrl: './dieux.component.html',
  styleUrls: ['./dieux.component.css']
})
export class DieuxComponent implements OnInit {

  // On déclare une liste de dieux vide
  listeDieux: Dieu[];

  constructor(private dieuService: DieuxService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
        
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.listeDieux = this.dieuService.getAllDieux();
  }

  deleteDieu(dieu: Dieu) {
    this.listeDieux = this.dieuService.deleteDieu(dieu);
    this.toastr.success(dieu.nom + ' a été supprimé', 'Je crois que Kratos est passé par là...');
    
  }
}
