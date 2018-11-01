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
      'Authorization': 'Bearer BQCr-RqK-Cg7kTSfZie4NlHF3GxzUxzpsTLyy9pnXr952L5DQGaRl31PQbiq4c51Mv8vXCkpnc3GE2Ni7_k'
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
