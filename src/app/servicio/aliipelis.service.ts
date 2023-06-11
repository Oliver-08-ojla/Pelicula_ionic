import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AliipelisService {

  httpClient= inject(HttpClient);
  

  constructor(){}

  getMoviesNowPlaying(){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=43bb95cae941badc90476b9f10f04134&language=en-US&page=1')
  }

  getEstreno(){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=43bb95cae941badc90476b9f10f04134&language=es-US&page=1')
  }

}
