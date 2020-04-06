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
        'Bearer BQDrpW9AU91z0a-5eI3U5LXZX8im9VXNvBjxJNRFVpUt4pi6mSbcb6HXibeZZbCUsaq4OB_H2pTL0aZHhToDkVNpb0d3zmyqjEmbl2PmSvWfjS3f9nKQcQN9odUw5TSnYn_j5Z_yZg2WKJE_hHk4Pzbegydk2IE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
}
