import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Joaquín';
  nombre2 = 'jOAquÍn SáNCHeZ rOdrÍgUEz';

  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  num: number = 0.234;

  val: number = 1234.5;

  idioma: string = 'es';

  heroe = {
    nombre: 'Peter Parker',
    clave: 'Spider-man',
    edad: 20,
    direccion: {
      calle: 'Calle false',
      numero: '123'
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llegó la información'), 3500);
  } );

  fecha = new Date();

  video = 'sAf9tFiy24s';

  activar = true;

}
