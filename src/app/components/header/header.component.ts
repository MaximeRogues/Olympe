import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todayDate = new Date();


} 
