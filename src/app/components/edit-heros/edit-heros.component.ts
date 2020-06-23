import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import { Heros } from 'src/app/models/heros';

@Component({
  selector: 'app-edit-heros',
  templateUrl: './edit-heros.component.html',
  styleUrls: ['./edit-heros.component.css']
})
export class EditHerosComponent implements OnInit {
  id: number;
  heros: Heros;

  constructor(private route: ActivatedRoute, private router: Router, private herosService: HerosService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.heros = this.herosService.getHerosByID(this.id);
  }

  updateHeros(Heros: Heros) {
    this.heros = Heros;
    this.router.navigate(['/heros']);

  }

}
