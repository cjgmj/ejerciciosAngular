import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  buscar(textSearched: string) {
    this.spotify.getArtist(textSearched).subscribe( (data: any) => {
      this.artists = data.artists.items;
    });
  }

}
