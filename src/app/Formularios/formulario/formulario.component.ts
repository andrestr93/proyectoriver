import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { candidato } from 'src/app/candidato';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
})
export class candidatoComponent implements OnInit {
  form: FormGroup;
  @Input()
  candidato: candidato;
  @Output()
  OnSubmit: EventEmitter<candidato> = new EventEmitter<candidato>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],

      surname: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],

      telephone: ['', [Validators.required]],

      tecnology: ['', [Validators.required]],

      salary: ['', [Validators.required ,  Validators.pattern('[0-9]*')]],

      dateIncor: ['', [Validators.required , Validators.pattern('[0-9]*') , Validators.max(30)]],

      assessment: ['', [Validators.required ,  Validators.pattern('[0-9]*') ,  Validators.min(1) , Validators.max(10)]],

      document1: '',
      document2: '',
      document3: '',
    });

    if (this.candidato !== undefined) {
      this.form.patchValue(this.candidato);
    }
  }

  guardarCandidato() {
    this.OnSubmit.emit(this.form.value);
  }

  guardarDocumento(file1: File) {
    this.form.get('document1').setValue(file1);
  }

  guardarDocumento2(file2: File) {
    this.form.get('document2').setValue(file2);
  }

  guardarDocumento3(file3: File) {
    this.form.get('document3').setValue(file3);
  }
}
