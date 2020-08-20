import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-espace-membre',
  templateUrl: './edit-espace-membre.component.html',
  styleUrls: ['./edit-espace-membre.component.css']
})
export class EditEspaceMembreComponent implements OnInit {
  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private connexionService: ConnexionService) { }

  ngOnInit(): void {

    this.connexionService.getUserByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: User) => {
      this.user = data;
    });
  }

  updateUser() {
    //lance la fonction updateUser de connexion.service
    this.connexionService.updateUser(this.user).subscribe(then => {
     // change l'url avec la route '/home'
     this.router.navigate(['/home']);
    }); 
  }

}
