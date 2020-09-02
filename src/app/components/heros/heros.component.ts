import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  // on déclare une liste de héros vide
  listeHeros: Heros[];
  isLoading: boolean;

  constructor(private herosService: HerosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllHeros
    this.herosService.getAllHeros().subscribe((data: Heros[]) => {
      this.listeHeros = data['hydra:member'];
      this.isLoading = false
})
}

 
}
