import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connecte : Boolean = this.connexionService.connecte;

  logged: boolean = false;

  isCollapsed = true;
  
  constructor(private connexionService : ConnexionService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };

    console.log(this.tokenStorageService.getUser());
    console.log(this.tokenStorageService.getToken());
  }

  public logout() {
    this.tokenStorageService.signOut();
    alert('Déconnexion réussie !')
    window.location.reload();    
  }
  

} 
