import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BanerinformativoComponent } from './banerinformativo/banerinformativo.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PerfilComponent,
    BanerinformativoComponent,
    ComponentesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
