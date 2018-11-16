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
    email: null
  };

  constructor() { }

  guardar( formulario: NgForm ) {
  }

}
