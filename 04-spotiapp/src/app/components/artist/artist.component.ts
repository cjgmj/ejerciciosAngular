import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist( id: string ) {
    this.spotify.getArtist(id).subscribe( artist => {
      this.artist = artist;
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id).subscribe( topTraks => {
      this.topTracks = topTraks;
      this.loading = false;
    });
  }

}
