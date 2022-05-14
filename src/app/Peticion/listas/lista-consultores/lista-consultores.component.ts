import { Component, OnInit } from '@angular/core';
import { CandidatoService } from 'src/app/candidato.service';
import { candidato } from 'src/app/candidato';
import {MatTableDataSource} from '@angular/material/table';


//const ELEMENT_DATA: listacandidatos: candidato[] = [];


@Component({
  selector: 'app-lista-consultores',
  templateUrl: './lista-consultores.component.html',
  styleUrls: ['./lista-consultores.component.css'],
})
export class ListaConsultoresComponent implements OnInit {
  candidatosList: candidato[] = [];

  candidatos: candidato;
  displayedColumns: string[] = ['nombre', 'apellidos', 'email', 'telefono' , 'tecnologia' , 'salario' , 'valoracion' , 'fechaincor'];
  dataSource: MatTableDataSource<candidato>;
  

 
  constructor(private candidatoservice: CandidatoService) {}


  ngOnInit(): void {
    this.candidatoservice
      .getCandidatos()
      .subscribe((candidatos: candidato[]) => {
        this.candidatosList = candidatos;
        this.dataSource = new MatTableDataSource(this.candidatosList);
   
        
      });


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
