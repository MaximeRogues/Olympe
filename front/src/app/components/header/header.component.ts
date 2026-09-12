import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connecte = false;

  logged = false;

  isCollapsed = true;
  
  constructor(private connexionService : ConnexionService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.connecte = this.connexionService.connecte;
    if(this.tokenStorageService.getToken()) {
      this.logged = true;
    };
  }

  public logout() {
    this.tokenStorageService.signOut();
    alert('Déconnexion réussie !')
    window.location.reload();    
  }
  

} 
