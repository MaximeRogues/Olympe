import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todayDate = new Date();
  connecte : Boolean = this.connexionService.connecte;

  isCollapsed = true;
  
  constructor(private connexionService : ConnexionService) { }

  ngOnInit(): void {

    
  }

  

} 
