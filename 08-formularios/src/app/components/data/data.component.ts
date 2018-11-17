import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  formulario: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: 'Ibai',
      apellido: 'Gómez'
    },
    email: 'ibai.gomaz@yopmail.com'
    // gustos: ['Correr', 'Dormir', 'Comer']
  };

  constructor() {
    this.formulario = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'gustos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });

    // this.formulario.setValue(this.usuario);
  }

  guardarCambios() {
    this.formulario.reset();
  }

  agregarGusto() {
    (<FormArray>this.formulario.controls['gustos']).push(new FormControl('', Validators.required));
  }

}
