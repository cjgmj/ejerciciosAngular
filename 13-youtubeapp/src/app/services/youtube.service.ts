import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  apiKey = 'AIzaSyDuT6_uC6gTec0MZjYbPc_-VAQ6SQikVdA';
  playList = 'UUa3DVlGH2_QhvwuWlPa6MDQ';

  private nextPageToken = '';

  constructor( private http: Http ) { }

  getVideos() {
    const url = `${ this.youtubeUrl }/playlistItems`;

    const params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playList);
    params.set('key', this.apiKey);

    if (this.nextPageToken !== '') {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { search: params }).pipe(map( res => {
      this.nextPageToken = res.json().nextPageToken;
      const videos: any[] = [];

      for (const video of res.json().items) {
        videos.push(video.snippet);
      }

      return videos;
    }));
  }
}
