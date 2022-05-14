import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment"
import { candidato } from './candidato';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCandidatos() {
    return this.http.get(`${this.baseUrl}/getAllcan.php`);
    
  }

  getAllCandidatos(): Observable <candidato[]>{


    return this.http.get<candidato[]>(this.baseUrl);


  }



  


}
