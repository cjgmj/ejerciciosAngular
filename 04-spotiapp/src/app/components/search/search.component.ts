import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;
  searched: boolean;

  constructor( private spotify: SpotifyService ) {}

  buscar(textSearched: string) {
    if (textSearched !== '') {
      this.loading = true;
      this.searched = false;

      this.spotify.getArtist(textSearched).subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
        this.searched = true;
      });
    }

    this.loading = false;
    this.searched = false;
  }

}
