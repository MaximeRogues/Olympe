import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';

@Component({
  selector: 'app-edit-dieu',
  templateUrl: './edit-dieu.component.html',
  styleUrls: ['./edit-dieu.component.css']
})
export class EditDieuComponent implements OnInit {
  id: number;
  dieu: Dieu;
  isLoading: boolean;

  pantheons = ['Grec', 'Egyptien', 'Nordique'];

  genres = ['Féminin', 'Masculin', 'Non défini'];

  constructor(private route: ActivatedRoute, private router: Router, private dieuService: DieuxService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dieuService.getDieuByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Dieu) => {
      this.dieu = data;
      this.isLoading = false;
    });
  }

  updateDieu() {
     //lance la fonction updateDieu de dieu.service
     this.dieuService.updateDieu(this.dieu).subscribe(then => {
      // change l'url avec la route '/dieu'
      this.router.navigate(['/dieux']);
      });
    }
  }

