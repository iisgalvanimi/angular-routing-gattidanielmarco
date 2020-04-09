import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  query: string;
  obsTrack: Observable<Object>;
  results: any;
  constructor(public spotify: SpotifyService) { }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.getAlbum(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }
  renderResults(res: any): void {
    this.results = null;
    if (res && res.album && res.album.items) {
      this.results = res.album.items;
    }
  }
  ngOnInit(): void {
  }

}
