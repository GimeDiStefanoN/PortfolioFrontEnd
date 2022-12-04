import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SobremiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LogoutComponent,
    Pagina404Component,
    BannerComponent,
    LoginComponent,
    ModalLoginComponent,
    ModalBannerComponent,
    ModalSobremiComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
    ModalHabilidadesComponent,
    ModalProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
