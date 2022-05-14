import { Component, OnInit } from '@angular/core';
import { peticion } from 'src/app/peticion';
import { PeticionService } from 'src/app/peticiones.service';


@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.css'],
})
export class ListaPeticionesComponent implements OnInit {
  listaPeticiones: peticion[] = [];
  peticiones: peticion;

  constructor(private peticionService: PeticionService ) {}

  ngOnInit(): void {
    this.peticionService.getPeticiones().subscribe((peticiones: peticion) => {
      this.peticiones = peticiones;
      this.listaPeticiones.push(peticiones);

      this.listaPeticiones.forEach(element => {

        console.log(element)
        
      });


    });
    


  }

 

  //TODO: COMPONENTE PADRE
  //TODO: FUNCION GUARDAR PETICION QUE GUARDA LOS DATOS EN EL LOCAL STORAGE
  guardarPeticion(peticion: peticion) {
    
    this.peticionService.addPeticion(peticion).subscribe(() => {
      console.log('añadido');
    });
  }
}
