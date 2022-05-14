import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { candidato } from 'src/app/candidato';
import { peticion } from 'src/app/peticion';

@Component({
  selector: 'app-crear-peticion',
  templateUrl: './crear-peticion.component.html',
  styleUrls: ['./crear-peticion.component.css'],
})
export class CrearPeticionComponent implements OnInit {
  constructor() {}
  candidateList: candidato[] = [];
  elementoscon: peticion[] = [];
  elementosacept: peticion[] = [];
  elementospreQM: peticion[] = [];
  elementosQM: peticion[] = [];
  elementosincor: peticion[] = [];
  elementosdelete: peticion [] = [] 
  ngOnInit(): void {
    if (localStorage.getItem('candidate') != null) {
      this.candidateList = JSON.parse(localStorage.getItem('candidate'));
    }
  }

  drop(event: CdkDragDrop<peticion[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
