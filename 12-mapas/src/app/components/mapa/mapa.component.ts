import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.marcadores.push(new Marcador(51.678418, 7.809007));
  }

  ngOnInit() {
  }

  agregarMarcador( event ) {
    const coords: { lat: number, lng: number } = event.coords;
    this.marcadores.push(new Marcador(coords.lat, coords.lng));
  }

}
