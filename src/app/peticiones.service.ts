import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { peticion } from "./peticion"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPeticiones() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  /*
  getPeticion(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }

  */
 

  addPeticion(peticion: peticion) {
    return this.http.post(`${this.baseUrl}/post.php`, peticion);
  }

  /*
  deletePeticion(peticion: peticion) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${peticion.id}`);
  }
  */

  updatePeticion(peticion: peticion) {
    return this.http.put(`${this.baseUrl}/update.php`, peticion);
  }
}