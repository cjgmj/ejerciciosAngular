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
      'Authorization': 'Bearer BQCesEwbqu_S1GkIDivd238-eJ5LGP4UtwD1z6grNumUrsqI_t1nAyGXPqMl8eeVAHPT44tV2bxk08j9Wj8'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map( data => data['albums'].items ));

  }

  getArtists (artist: string) {

    return this.getQuery(`search?q=${ artist }&type=artist&limit=15`)
              .pipe(map( data => data['artists'].items ));

  }

  getArtist (id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks (id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
              .pipe(map( data => data['tracks'] ));
  }
}
