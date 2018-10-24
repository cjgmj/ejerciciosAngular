import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: String = 'Joaquín';

  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  num = 0.234;

  val = 1234.5;

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

}
