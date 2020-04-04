import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBBixbe8Z8MOV6X1CD45caEuZaFTeXj7WnuhWLGTKxjxtcGvvSf9PdB7F0XRnoY5PANs7-xY-L2AZC6PCNp7y19Klrqg6T9yaYgtOvCgwJFsHXteca7BNeYbtaEXWvWTTQ8_SOiTrvXjys0pN9VJwrmnCnr9qY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
}
