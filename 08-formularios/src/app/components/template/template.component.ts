import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: '',
    acepta: false
  };

  paises = [{
    codigo: 'ESP',
    nombre: 'España'
  },
  {
    codigo: 'PT',
    nombre: 'Portugal'
  }];

  sexos: string[] = ['Hombre', 'Mujer'];

  constructor() { }

  guardar( formulario: NgForm ) {
  }

}
