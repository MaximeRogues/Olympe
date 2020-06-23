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

  constructor(private route: ActivatedRoute, private router: Router, private dieuService: DieuxService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.dieu = this.dieuService.getDieuByID(this.id);
  }

  updateDieu(dieu: Dieu) {
    this.dieu = dieu;
    this.router.navigate(['/dieux']);

  }

}
