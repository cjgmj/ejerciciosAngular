import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      'nombre': new FormControl(),
      'apellido': new FormControl(),
      'correo': new FormControl()
    });
  }

  guardarCambios() {
    
  }

}
