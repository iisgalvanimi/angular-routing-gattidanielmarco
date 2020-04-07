import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({Authorization: environment.oauthToken});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBE9I7eDSE51ySKa7XMuzFAB750yTsigJBEdRreth4SsbXu8L4Ri_kziW5HkH8M-DzUuVgvgNt9-8nyBsLX-w7sqtB1lxyzGajO4V3PLLGhCbhCBbWiy2qDx1yAIOFgPbp1YkuS3V_UpSbc12OMjZk5sNP8g8c'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBE9I7eDSE51ySKa7XMuzFAB750yTsigJBEdRreth4SsbXu8L4Ri_kziW5HkH8M-DzUuVgvgNt9-8nyBsLX-w7sqtB1lxyzGajO4V3PLLGhCbhCBbWiy2qDx1yAIOFgPbp1YkuS3V_UpSbc12OMjZk5sNP8g8c'
    });

      return this.http.get(url, { headers });
  }
}
