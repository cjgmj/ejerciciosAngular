import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  // image.tmdb.org/t/p/w600

  constructor( private jsonp: Jsonp ) { }

  getPopulares() {
    const url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es-ES
    &callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }

  getPopularesNinos() {
    const url = `${ this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es-ES
    &include_adult=false&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }

  buscarPelicula( texto: string) {
    const url = `${ this.urlMoviedb}/search/movie?query=${ texto }&api_key=${ this.apikey }&language=es-ES
    &callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }
}
