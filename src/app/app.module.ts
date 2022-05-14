import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './Login/login-usuario/login-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidatoComponent } from './candidato/candidato.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CrearPeticionComponent } from './Peticion/crear-peticion/crear-peticion.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListaPeticionesComponent } from './Peticion/listas/lista-peticiones/lista-peticiones.component';
import { PeticionesComponent } from './Peticion/peticiones/peticiones.component';
import { InputImgComponent } from './Utilidades/input-img/input-img.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultoresComponent } from './Consultores/consultores/consultores.component';
import { ListaConsultoresComponent } from './Peticion/listas/lista-consultores/lista-consultores.component';
import {MatTableModule} from '@angular/material/table';







@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    LandingPageComponent,
    CandidatoComponent,
    CrearPeticionComponent,
    MenuComponent,
    CandidatoComponent,
    ListaPeticionesComponent,
    PeticionesComponent,
    InputImgComponent,
    ConsultoresComponent,
    ListaConsultoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    HttpClientModule,
    CommonModule,
    MatTableModule
 
   


  ],
  providers: [

   
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
  
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
