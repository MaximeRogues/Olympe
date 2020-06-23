import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';
import { Monstres } from 'src/app/models/monstres';

@Component({
  selector: 'app-edit-monstre',
  templateUrl: './edit-monstre.component.html',
  styleUrls: ['./edit-monstre.component.css']
})
export class EditMonstreComponent implements OnInit {
  id: number;
  monstre: Monstres;

  constructor(private route: ActivatedRoute, private router: Router, private monstreService: MonstresService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.monstre = this.monstreService.getMonstreByID(this.id);
  }

  updateMonstre(monstre: Monstres) {
    this.monstre = monstre;
    this.router.navigate(['/monstres']);

  }

}
