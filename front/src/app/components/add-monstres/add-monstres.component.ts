import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { MonstresService } from 'src/app/services/monstres.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { Pantheons } from 'src/app/models/pantheons';
import { PantheonsService } from 'src/app/services/pantheons.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-add-monstres',
  templateUrl: './add-monstres.component.html',
  styleUrls: ['./add-monstres.component.css']
})
export class AddMonstresComponent implements OnInit {

  monster: Monstres;
  isLoading: boolean;
  pantheons : Pantheons[];
  genders : Genres[];
  file: File;
  validPicture: boolean = false;
  validFileTypes = ["image/jpeg", "image/png"];

  constructor(private monsterService: MonstresService, private router: Router, private toastr: ToastrService, private genderService: GenresService, private pantheonService: PantheonsService, private tokenStorageService: TokenStorageService, private upload: UploadService) { }

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
      // on déclare un new Monstres vide
    this.monster = new Monstres();
    this.isLoading = true;
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log('Image récupérée : ' + this.file.name);
  }

  submitMonster() {
    if(this.file == undefined || this.file == null || !this.validFileTypes.includes(this.file.type) ) {
      alert("Format d'image non valide, veuillez utiliser un fichier jpg ou png");
      window.location.reload();
      return;
    }
    let formData = new FormData();
    formData.append('file', this.file);
    this.monster.picture = this.file.name;

    this.upload.uploadFile(formData);
    // fonction de monstre.service pour push un monstre dans la liste
    this.monsterService.addMonster(this.monster).subscribe(then => {
      // naviguer vers la page monstres
      this.router.navigate(['/monstres']);   
    })
    this.toastr.success('Aiguisez vos armes !','Un nouveau monstre sème la terreur !')
  }

}
