import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { ConnexionService } from 'src/app/services/connexion.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user : User;
  tryPseudo: string ;
  tryPassword: string ;

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private connexionService: ConnexionService) { }

  ngOnInit(): void {
    // je crée un User
    this.user = new User();

    // je récupère le User avec l'id 1, et j'injecte ses infos dans this.user
    this.connexionService.getUserByID(1).subscribe((data:User) => {
      this.user = data['hydra:member'];
      console.log(this.user);
      
    });
  }
  
  connexion() {

    // récupère la valeur des inputs de connexion
    this.tryPseudo = (<HTMLInputElement> document.getElementById('pseudo')).value;
    this.tryPassword = (<HTMLInputElement> document.getElementById('password')).value;

    // si pseudo et password correspondent à ceux de this.user
    if(this.tryPseudo === this.user.pseudo && this.tryPassword === this.user.password) {
      // on met le boolean de connexion à true 
      this.connexionService.connecte = true;
      // redirige vers l'espace membre correspondant à l'id du user
      this.router.navigate(['/espace-membre/' + this.user.id]); 
      console.log( this.connexionService.connecte);
      
      this.toastr.success('Connexion réussie','Succès');

    } else {
      this.toastr.error('Erreur de pseudo ou de mot de passe','Echec de connexion');
    }
  }



}
