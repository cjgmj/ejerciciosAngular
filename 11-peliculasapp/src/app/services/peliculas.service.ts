import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  // http://image.tmdb.org/t/p/w600

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

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);

    const desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;

    const url = `${ this.urlMoviedb}/discover/movie?primary_release_date.gte=${ desdeStr }&language=es-ES
    &primary_release_date.lte=${ hastaStr }&sort_by=popularity.desc&api_key=${ this.apikey }&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }

  buscarPelicula( texto: string) {
    const url = `${ this.urlMoviedb}/search/movie?query=${ texto }&api_key=${ this.apikey }&language=es-ES
    &callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map(res => res.json()));
  }
}
