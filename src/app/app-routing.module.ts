import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DieuxComponent } from './components/dieux/dieux.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HerosComponent } from './components/heros/heros.component';
import { DieuDetailComponent } from './components/dieu-detail/dieu-detail.component';
import { HerosDetailComponent } from './components/heros-detail/heros-detail.component';
import { MonstresComponent } from './components/monstres/monstres.component';
import { MonstreDetailComponent } from './components/monstre-detail/monstre-detail.component';
import { AddDieuxComponent } from './components/add-dieux/add-dieux.component';
import { AddHerosComponent } from './components/add-heros/add-heros.component';
import { AddMonstresComponent } from './components/add-monstres/add-monstres.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { EditDieuComponent } from './components/edit-dieu/edit-dieu.component';
import { EditHerosComponent } from './components/edit-heros/edit-heros.component';
import { EditMonstreComponent } from './components/edit-monstre/edit-monstre.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dieux', component: DieuxComponent },
  { path: 'dieux/add', component: AddDieuxComponent },
  { path: 'dieux/:id', component: DieuDetailComponent },
  { path: 'edit-dieu/:id', component: EditDieuComponent },

  { path: 'heros', component: HerosComponent },
  { path: 'heros/add', component: AddHerosComponent },
  { path: 'heros/:id', component: HerosDetailComponent },
  { path: 'edit-heros/:id', component: EditHerosComponent },

  { path: 'monstres', component: MonstresComponent },
  { path: 'monstres/add', component: AddMonstresComponent },
  { path: 'monstres/:id', component: MonstreDetailComponent },
  { path: 'edit-monstres/:id', component: EditMonstreComponent },

  { path: 'quiz', component: QuizComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
