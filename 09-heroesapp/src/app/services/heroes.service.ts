import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireUrl = 'https://heroesapp-f6660.firebaseio.com/heroes.json';

  constructor( private http: Http ) { }

  nuevoHeroe( heroe: Heroe ) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.fireUrl, body, { headers: headers} ).pipe(map( res => {
      return res.json();
    } ));
  }
}
