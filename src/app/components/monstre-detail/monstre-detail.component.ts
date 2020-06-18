import { Component, OnInit } from '@angular/core';
import { Monstres } from 'src/app/models/monstres';
import { ActivatedRoute } from '@angular/router';
import { MonstresService } from 'src/app/services/monstres.service';

@Component({
  selector: 'app-monstre-detail',
  templateUrl: './monstre-detail.component.html',
  styleUrls: ['./monstre-detail.component.css']
})
export class MonstreDetailComponent implements OnInit {

  id: number;
  monstre: Monstres;

  constructor(private route: ActivatedRoute, private monstreService: MonstresService) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.monstre = this.monstreService.getMonstreByID(this.id);
  }

}
