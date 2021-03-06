import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { Monstres } from 'src/app/models/monstres';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { Pantheons } from 'src/app/models/pantheons';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit-monstre',
  templateUrl: './edit-monstre.component.html',
  styleUrls: ['./edit-monstre.component.css']
})
export class EditMonstreComponent implements OnInit {
  id: number;
  monster: Monstres;
  isLoading: boolean;
  pantheons : Pantheons[];
  genders : Genres[];
  file: File;

  constructor(private route: ActivatedRoute, private router: Router, private monsterService: MonstresService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService, private upload: UploadService) { }

  ngOnInit(): void {
    this.isLoading = true;

    if(!this.tokenStorageService.getToken()) {
      this.router.navigate(['/monstres']);
    };

    this.pantheonService.getAllPantheons().subscribe((data: Pantheons[]) => {
      this.pantheons = data['hydra:member'];
    });

    this.genderService.getAllGenders().subscribe((data: Genres[]) => {
      this.genders = data['hydra:member'];
    });

    this.monsterService.getMonsterByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Monstres) => {
      this.monster = data;
      this.isLoading = false;
    });  
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log('Image récupérée : ' + this.file.name);
  }

  updateMonster() {
    let formData = new FormData();
    formData.append('file', this.file);
    this.monster.picture = this.file.name;
    
    //lance la fonction updateMonstre de monstre.service
    this.monsterService.updateMonster(this.monster).subscribe(then => {
      // change l'url avec la route '/monstre'
      this.router.navigate(['/monstres']);
      });
    }

}
