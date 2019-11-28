import { Movie } from './movie/movie';
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class CommonapiService {
  vconInfo: object[];
  constructor(@Inject(HttpClient) public http) {}
  funGetData() {
    return this.http.get("http://www.omdbapi.com/?i=tt2975590&apikey=1bfd5c2a");
    //console.log(mm)
  }

  // funGetAllMovie() {
  //   return this.http.get("http://www.omdbapi.com/?s=batman&apikey=1bfd5c2a");
  // }
  fungetMoviesequels():Observable<Movie[]> {
    return this.http.get('http://www.omdbapi.com/?s=batman&apikey=1bfd5c2a')
    .pipe(
      map(res => res["Search"])
    );
      }
//  for all data of movie
  // funsenddata(obj) {
  //   alert('hiiiii')
  //   return this.http.post('sendmovie', obj);
  // }

  // fungetmovie(obj) {
  //   return this.http.post('getmovie', obj);
  //   alert('hiiiiiiiiiii');
  // }

  // fungetmoviedetails(obj) {
  //   return this.http.post("getmovieId", obj);
  // }
  // funSendAllSequels(obj){
  //   return this.http.post("sendmoviesequels",obj)
  // }

  // fungetmoviesequls(obj) {
  //   return this.http.post("getmovie", obj);
  // }
  //for all sequels
  funsendsequels(obj){
    return this.http.post('sendsequles', obj);
  }
  }
