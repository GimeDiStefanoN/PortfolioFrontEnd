import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos routing, app component y http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
//importamos componentes secciones
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
//importamos componentes modales
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalSobremiComponent } from './modales/modal-sobremi/modal-sobremi.component';
import { ModalEditEducacionComponent } from './modales/modales-educacion/modal-edit-educacion/modal-edit-educacion.component';
import { ModalAddEducacionComponent } from './modales/modales-educacion/modal-add-educacion/modal-add-educacion.component';
import { ModalEditExperienciaComponent } from './modales/modales-experiencias/modal-edit-experiencia/modal-edit-experiencia.component';
import { ModalAddExperienciaComponent } from './modales/modales-experiencias/modal-add-experiencia/modal-add-experiencia.component';
import { ModalEditHabilidadesComponent } from './modales/modales-habilidades/modal-edit-habilidades/modal-edit-habilidades.component';
import { ModalAddHabilidadesComponent } from './modales/modales-habilidades/modal-add-habilidades/modal-add-habilidades.component';
import { ModalEditProyectosComponent } from './modales/modales-proyectos/modal-edit-proyectos/modal-edit-proyectos.component';
import { ModalAddProyectosComponent } from './modales/modales-proyectos/modal-add-proyectos/modal-add-proyectos.component';
//importamos forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ModalEditEducacionComponent,
    ModalAddEducacionComponent,
    ModalEditExperienciaComponent,
    ModalAddExperienciaComponent,
    ModalEditHabilidadesComponent, 
    ModalAddHabilidadesComponent,
    ModalEditProyectosComponent,
    ModalAddProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
