import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';
import { GenresService } from 'src/app/services/genres.service';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { Pantheons } from 'src/app/models/pantheons';
import { Genres } from 'src/app/models/genres';

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

  constructor(private route: ActivatedRoute, private router: Router, private dieuService: DieuxService, private genderService: GenresService, private pantheonService: PantheonsService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenres().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.dieuService.getDieuByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Dieu) => {
      this.god = data['hydra:member'];
      this.isLoading = false;
    });
  }

  updateDieu() {
     //lance la fonction updateDieu de dieu.service
     this.dieuService.updateDieu(this.god).subscribe(then => {
      // change l'url avec la route '/dieu'
      this.router.navigate(['/dieux']);
      });
    }
  }

