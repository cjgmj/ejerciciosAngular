import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor( public snackBar: MatSnackBar ) {
    if ( localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador( event ) {
    const coords: { lat: number, lng: number } = event.coords;
    this.marcadores.push(new Marcador(coords.lat, coords.lng));
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  eliminarMarcador( index: number ) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
