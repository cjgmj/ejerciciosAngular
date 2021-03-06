import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: '',
    acepta: false
  };

  paises: any[] = [];

  // paises = [{
  //   codigo: 'ESP',
  //   nombre: 'España'
  // },
  // {
  //   codigo: 'PT',
  //   nombre: 'Portugal'
  // }];

  sexos: string[] = ['Hombre', 'Mujer'];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: 'Seleccione un país',
        codigo: ''
      })
    });
  }

  guardar( formulario: NgForm ) {
    console.log(formulario);
  }

}
