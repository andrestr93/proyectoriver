import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {candidato } from '../candidato';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
})
export class CandidatoComponent implements OnInit {
 candidateList: candidato[] = [];


  constructor(  private router : Router) {}

  ngOnInit(): void {}

  guardarCandidato(candidate: candidato) {


    if (localStorage.getItem('candidate') == null) {
      localStorage.setItem('candidate', '[]');
    }
  this.candidateList = JSON.parse(localStorage.getItem('candidate'));
    this.candidateList.push(candidate);
    localStorage.setItem('candidate', JSON.stringify(this.candidateList));

   this.candidateList.forEach(element => {
     
    console.log(element)
   });

    this.router.navigate(['./crear-peticion'])
  }
}
