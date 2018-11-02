import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAYB6nLnC3y31pxySsnpSYSmiQESyxgb3MbbBsatTf1Ug9b6P5bkfDbUBjM96uZ6D9QUQogXQKBLqafjmU'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map( data => data['albums'].items ));

  }

  getArtist (artist: string) {

    return this.getQuery(`search?q=${ artist }&type=artist&limit=15`)
              .pipe(map( data => data['artists'].items ));

  }
}
