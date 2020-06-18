import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dieu } from 'src/app/models/dieu';
import { DieuxService } from 'src/app/services/dieux.service';

@Component({
  selector: 'app-dieu-detail',
  templateUrl: './dieu-detail.component.html',
  styleUrls: ['./dieu-detail.component.css']
})
export class DieuDetailComponent implements OnInit {
  id: number;
  dieu: Dieu;

  constructor(private route: ActivatedRoute, private dieuService: DieuxService) { 

  }
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.dieu = this.dieuService.getDieuByID(this.id);

  }

  
}
