import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // on déclare une liste de questions vide 
  listeQuestions: Quiz[];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {

    this.listeQuestions = this.quizService.getAllQuestions();
  }

  submitQuiz() {
    console.log('salut')
  }

}
