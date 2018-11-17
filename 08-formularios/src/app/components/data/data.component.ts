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
        'apellido': new FormControl('', [Validators.required, this.noGomez])
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'gustos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.formulario.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.formulario )
    ]);

    // this.formulario.setValue(this.usuario);
  }

  guardarCambios() {
    // this.formulario.reset();
  }

  noGomez( control: FormControl ): { [s: string]: boolean } {
    if ( control.value === 'gomez' ) {
      return {
        nogomez: true
      };
    }
    return null;
  }

  noIgual( control: FormControl ): { [s: string]: boolean } {
    if ( control.value !== this.controls['password1'].value ) {
      return {
        noigual: true
      };
    }
    return null;
  }

  agregarGusto() {
    (<FormArray>this.formulario.controls['gustos']).push(new FormControl('', Validators.required));
  }

}
