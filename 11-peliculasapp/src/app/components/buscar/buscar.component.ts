import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor( public _ps: PeliculasService, public activateRoute: ActivatedRoute ) {
    this.activateRoute.params.subscribe( params => {
      if (params['buscar']) {
        this.buscar = params['buscar'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula() {
    if ( this.buscar.length === 0) {
      return;
    }

    this._ps.buscarPelicula(this.buscar).subscribe();
  }

}
