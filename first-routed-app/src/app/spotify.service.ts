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
        'Bearer BQCGnG-W49qoCBc9-bl4PA4SUCxmoJYuvHeWybmLtCMrhrIFj32aGOTcbGmI_r0InHg5yKWy6q3ZinoO97wAxEx5h5X4B2ek3-fIWvWFE35d1Jfn33xVz16l7QC8o4VLPxWCnKzpIW7BEOENRYkZyiurh8REf28'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCGnG-W49qoCBc9-bl4PA4SUCxmoJYuvHeWybmLtCMrhrIFj32aGOTcbGmI_r0InHg5yKWy6q3ZinoO97wAxEx5h5X4B2ek3-fIWvWFE35d1Jfn33xVz16l7QC8o4VLPxWCnKzpIW7BEOENRYkZyiurh8REf28'
    });

      return this.http.get(url, { headers });
  }

}
