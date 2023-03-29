import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { WorksComponent } from './componentes/works/works.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { VistaLogeadoComponent } from './componentes/vista-logeado/vista-logeado.component';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { CertificadosComponent } from './componentes/certificados/certificados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortadaComponent,
    AboutUsComponent,
    EducationComponent,
    SkillsComponent,
    WorksComponent,
    FooterComponent,
    VistaLogeadoComponent,
    PrincipalComponent,
    CertificadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
