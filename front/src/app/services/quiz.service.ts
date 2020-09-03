import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  question = Quiz;

  listeQuestions = [

    new Quiz(1, 'Avec quelle arme Bellérophon a tué la chimère ?', 'Un arc donné par Apollon', 'Un glaive enchanté par Athéna', 'Une lance à la pointe de plomb', 'Un bouclier spartiate', 'q3'),

    new Quiz(2, 'Quels animaux tirent le char de Poséidon ?', 'Des cheveaux ailés', 'Des hippocampes', 'Des requins', 'Des Baleines', 'q2'),

    new Quiz(3, 'Qui est le forgeron de l\'Olympe ?', 'Apollon', 'Hestia', 'Déméter', 'Héphaïstos', 'q4'),

    new Quiz(4, 'Quel est le monstre posté avec Charybde dans le détroit de Messine ?', 'Cerbère', 'Scylla', 'Le minotaure', 'Le sphinx', 'q2'),

    new Quiz(5, 'Quel est le point faible d\'Achille ?', 'Son talon', 'Son épaule', 'Un de ses doigts', 'Son menton', 'q1'),
  ]

  constructor(private http: HttpClient) { }

  

  getAllQuestions() {
    return this.listeQuestions
  }



  
}
