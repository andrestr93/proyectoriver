import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoComponent } from './candidato/candidato.component';
import { ClientesComponent } from './Clientes/clientes/clientes.component';
import { ConsultoresComponent } from './Consultores/consultores/consultores.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginUsuarioComponent } from './Login/login-usuario/login-usuario.component';
import { CrearPeticionComponent } from './Peticion/crear-peticion/crear-peticion.component';
import { ListaPeticionesComponent } from './Peticion/listas/lista-peticiones/lista-peticiones.component';
import { PeticionesComponent } from './Peticion/peticiones/peticiones.component';
import { ListaConsultoresComponent } from './Peticion/listas/lista-consultores/lista-consultores.component';

const routes: Routes = [
  {path:'' , component: LoginUsuarioComponent },
  {path:'registro' , component: CandidatoComponent},
  {path: 'crear-peticion' , component: CrearPeticionComponent},
  {path: 'candidato' , component: CandidatoComponent},
  {path: 'lista-peticiones' , component:ListaPeticionesComponent},
  {path: 'peticiones' , component: PeticionesComponent},
  {path: 'clientes' , component: ClientesComponent},
  {path: 'consultores' , component: ConsultoresComponent},
  {path: 'lista-consultores'  , component: ListaConsultoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 