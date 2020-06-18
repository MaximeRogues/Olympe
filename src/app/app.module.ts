import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DieuxComponent } from './components/dieux/dieux.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DieuDetailComponent } from './components/dieu-detail/dieu-detail.component';
import { HerosDetailComponent } from './components/heros-detail/heros-detail.component';
import { MonstresComponent } from './components/monstres/monstres.component';
import { MonstreDetailComponent } from './components/monstre-detail/monstre-detail.component';
import {FormsModule} from '@angular/forms';

import { AddDieuxComponent } from './components/add-dieux/add-dieux.component';
import { AddHerosComponent } from './components/add-heros/add-heros.component';
import { AddMonstresComponent } from './components/add-monstres/add-monstres.component'



@NgModule({
  declarations: [
    AppComponent,
    DieuxComponent,
    HerosComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    DieuDetailComponent,
    HerosDetailComponent,
    MonstresComponent,
    MonstreDetailComponent,
    AddDieuxComponent,
    AddHerosComponent,
    AddMonstresComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
