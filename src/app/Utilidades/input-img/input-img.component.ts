import { Component, OnInit, Output , EventEmitter } from '@angular/core';



@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}

  imagenBase64 : string
  @Output()
  archivoSeleccionado:EventEmitter<File> = new EventEmitter<File>()

  ngOnInit(): void {}

  change(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.toBase64(file).then((value:string) => this.imagenBase64 = value);
      this.archivoSeleccionado.emit(file)
     

    }

  }

  change2(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.toBase64(file).then((value:string) => this.imagenBase64 = value);
      this.archivoSeleccionado.emit(file)
      console.log(file)

    }

  }

  change3(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.toBase64(file).then((value:string) => this.imagenBase64 = value);
      this.archivoSeleccionado.emit(file)
      console.log(file)

    }

  }

  toBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
