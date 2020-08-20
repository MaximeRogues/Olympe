import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspaceMembreService } from 'src/app/services/espace-membre.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-espace-membre',
  templateUrl: './espace-membre.component.html',
  styleUrls: ['./espace-membre.component.css']
})
export class EspaceMembreComponent implements OnInit {
  id: number;
  user: User;

  constructor(private connexionService : ConnexionService, private router : Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.connexionService.getUserByID(+this.route.snapshot.paramMap.get('id')).subscribe((data:User) => {
      this.user = data;
    });
  }

  deconnexion() {
    this.connexionService.connecte = false;
    this.router.navigate(['/home']);
    this.toastr.success('Vous êtes déconnecté','A bientôt !');
  }
}
