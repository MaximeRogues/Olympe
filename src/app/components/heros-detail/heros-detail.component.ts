import { Component, OnInit } from '@angular/core';
import { Heros } from 'src/app/models/heros';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';

@Component({
  selector: 'app-heros-detail',
  templateUrl: './heros-detail.component.html',
  styleUrls: ['./heros-detail.component.css']
})
export class HerosDetailComponent implements OnInit {
  id: number;
  heros: Heros;

  constructor(private route: ActivatedRoute, private herosService: HerosService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.heros = this.herosService.getHerosByID(this.id);

  }

}
