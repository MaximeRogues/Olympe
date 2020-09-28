import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-edit-dieu',
  templateUrl: './edit-dieu.component.html',
  styleUrls: ['./edit-dieu.component.css']
})
export class EditDieuComponent implements OnInit {
  id: number;
  god: Dieu;
  isLoading: boolean;

  pantheons : Pantheons[];

  genders : Genres[];

  constructor(private route: ActivatedRoute, private router: Router, private godService: DieuxService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoading = true;

    if(!this.tokenStorageService.getToken()) {
      this.router.navigate(['/dieux']);
    };

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.godService.getGodByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Dieu) => {
      this.god = data;
      this.isLoading = false;
    });
  }

  updateGod() {
     //lance la fonction updateDieu de dieu.service
     this.godService.updateGod(this.god).subscribe(then => {
      // change l'url avec la route '/dieu'
      this.router.navigate(['/dieux']);
      });
    }
  }

