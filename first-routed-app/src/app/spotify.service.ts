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
        'Bearer BQB09btROS1r4ynuBGs6coigc6-QjwoUcOyKB1XyX8DXjOiHjOUoKo-QFI3ohRyzL4AZxqK9hf6qQ3O0oZUreL749fU6o-DS1Dr1JqovkcsvjWs6wWLOODic_sMAZY6fZIoPvtYxPP9KqTktmdymRp0Bz8FhIhXfF_Bw6FnbfamNt_7S94mnzKIbOhBDtER1w0co_1GUh4N7sLsx31mhZ7zh4GTIErOj2tIktJlcQQQMFxSbm012KHmcb0K99PPSQKAYk7uUKsMDtKczOSCX3LDlZRC_Cw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio

  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB09btROS1r4ynuBGs6coigc6-QjwoUcOyKB1XyX8DXjOiHjOUoKo-QFI3ohRyzL4AZxqK9hf6qQ3O0oZUreL749fU6o-DS1Dr1JqovkcsvjWs6wWLOODic_sMAZY6fZIoPvtYxPP9KqTktmdymRp0Bz8FhIhXfF_Bw6FnbfamNt_7S94mnzKIbOhBDtER1w0co_1GUh4N7sLsx31mhZ7zh4GTIErOj2tIktJlcQQQMFxSbm012KHmcb0K99PPSQKAYk7uUKsMDtKczOSCX3LDlZRC_Cw'
    });

      return this.http.get(url, { headers });
  }
  getAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB09btROS1r4ynuBGs6coigc6-QjwoUcOyKB1XyX8DXjOiHjOUoKo-QFI3ohRyzL4AZxqK9hf6qQ3O0oZUreL749fU6o-DS1Dr1JqovkcsvjWs6wWLOODic_sMAZY6fZIoPvtYxPP9KqTktmdymRp0Bz8FhIhXfF_Bw6FnbfamNt_7S94mnzKIbOhBDtER1w0co_1GUh4N7sLsx31mhZ7zh4GTIErOj2tIktJlcQQQMFxSbm012KHmcb0K99PPSQKAYk7uUKsMDtKczOSCX3LDlZRC_Cw'
    });

      return this.http.get(url, { headers });
  }
  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB09btROS1r4ynuBGs6coigc6-QjwoUcOyKB1XyX8DXjOiHjOUoKo-QFI3ohRyzL4AZxqK9hf6qQ3O0oZUreL749fU6o-DS1Dr1JqovkcsvjWs6wWLOODic_sMAZY6fZIoPvtYxPP9KqTktmdymRp0Bz8FhIhXfF_Bw6FnbfamNt_7S94mnzKIbOhBDtER1w0co_1GUh4N7sLsx31mhZ7zh4GTIErOj2tIktJlcQQQMFxSbm012KHmcb0K99PPSQKAYk7uUKsMDtKczOSCX3LDlZRC_Cw'
    });

      return this.http.get(url, { headers });
  }
}
