import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { peticion } from 'src/app/peticion';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css'],
})
export class PeticionesComponent implements OnInit {
  //todo: creamos una variable de tipo formgroup , un decorador Input y una variable peticion con otro decorador OUtput 
  // todo a continuación creamos un objeto de tipo eventemitter 
  form: FormGroup;
  @Input()
  peticion: peticion;
  @Output()
  OnSubmit: EventEmitter<peticion> = new EventEmitter<peticion>();
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group({

      peticion : ['']

    })
// todo : condicion que dice si no existe la peticion cree la peticion con los datos del formulario 
    if (this.peticion !== undefined) {
      this.form.patchValue(this.peticion);
    }
  }

  // todo aqui guardamos la peticion
  guardarPeticion() {
    this.OnSubmit.emit(this.form.value);
  }
}
