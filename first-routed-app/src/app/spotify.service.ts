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
        'Bearer BQC-d0gf_kgXoGm1X2BFFBErpViFJBaJef4wPYlD4aMUpDmmnygxVclIopIC99u5CJIeOPXLYw8Jsgg_ThHgXgMMqvyoR2vaxX5aF3aZMgT3McWOWfk-2HailU4pYovc5SgtSIK6RcxrHh44rrkesoPmRNEihK8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
}
