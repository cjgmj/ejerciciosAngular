import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  pag: string;
  buscar: string;

  constructor( private _ps: PeliculasService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this._ps.getPelicula(params['id']).subscribe( data => {
        this.pelicula = data;
        this.pag = params['pag'];

        if (params['buscar']) {
          this.buscar = params['buscar'];
        }
      } );
    });
  }

  ngOnInit() {
  }

}
