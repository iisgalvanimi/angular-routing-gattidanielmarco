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
        'Bearer BQBy98mdDU33T6S8hdQUtslUzv4RhUHhDW2iiWlsnf6g-En2VqzUMMPj4VxMmxCfWrsWN1qUP4euHUfwzBq4w34-gFuivqk7zm1XFGqVLzAPS9nYrVK1e5Eqm-X8yjbw3-ztKG2St2VDWSiygiYQBSuHG2efoVg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBy98mdDU33T6S8hdQUtslUzv4RhUHhDW2iiWlsnf6g-En2VqzUMMPj4VxMmxCfWrsWN1qUP4euHUfwzBq4w34-gFuivqk7zm1XFGqVLzAPS9nYrVK1e5Eqm-X8yjbw3-ztKG2St2VDWSiygiYQBSuHG2efoVg'
    });

      return this.http.get(url, { headers });
  }
}
