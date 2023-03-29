import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaLogeadoComponent } from './componentes/vista-logeado/vista-logeado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: PrincipalComponent},
  {path: 'profile',component:VistaLogeadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
