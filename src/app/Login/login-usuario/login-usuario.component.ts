import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/login';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  @Input()
  modelo:Login;
  location: Location

  userLogin : FormGroup
  constructor(private formBUilder : FormBuilder) { }
  ngOnInit(){

   this.userLogin = this.formBUilder.group({
    user : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  
  console.log( "ruta : " + location.href)
  }

  login(){
    
   
    
  }

}
