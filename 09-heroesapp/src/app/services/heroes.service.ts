import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireUrl = 'https://heroesapp-f6660.firebaseio.com/heroes';

  constructor( private http: Http ) { }

  nuevoHeroe( heroe: Heroe ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.fireUrl}.json`;

    return this.http.post( url, body, { headers: headers} ).pipe(map( res => {
      return res.json();
    } ));
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.fireUrl}/${key$}.json`;

    return this.http.put( url, body, { headers: headers} ).pipe(map( res => {
      return res.json();
    } ));
  }

  obtenerHeroe( key$: string ) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.fireUrl}/${key$}.json`;

    return this.http.get( url, { headers: headers} ).pipe(map( res => {
      return res.json();
    } ));
  }
}
