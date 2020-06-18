import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DieuxComponent } from './components/dieux/dieux.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HerosComponent } from './components/heros/heros.component';
import { DieuDetailComponent } from './components/dieu-detail/dieu-detail.component';
import { HerosDetailComponent } from './components/heros-detail/heros-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dieux', component: DieuxComponent },
  { path: 'dieux/:id', component: DieuDetailComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'heros/:id', component: HerosDetailComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
