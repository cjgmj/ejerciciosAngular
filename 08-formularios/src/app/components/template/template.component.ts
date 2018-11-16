import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: 'Ibai',
    apellido: 'Gómez',
    email: 'ibai.gomez@yopmail.com'
  };

  constructor() { }

  guardar( formulario: NgForm ) {
  }

}
