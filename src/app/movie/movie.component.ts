import { CommonapiService } from "./../commonapi.service";
import { Component, OnInit, Inject } from "@angular/core";
import { Movie } from "./movie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent {
  getdata: object[];
  movie;
  moviedetail;
  movieId;
  moviedetail1;
  moviesequels;
  varTabData: object[];
  getallmovie: object[];
  constructor(@Inject(CommonapiService) public ser) {
    // this.ser.funGetData().subscribe(data => {
    //   this.getdata = data;  
    //   //alert(this.getdata);
    //   this.ser.funsenddata(this.getdata).subscribe(dt => {});
    // });
    this.ser.fungetMoviesequels().subscribe(data => {
      this.getallmovie = data;
      alert(this.getallmovie);
      this.ser.funsendsequels(this.getallmovie).subscribe(data1 => {
        this.getallmovie = data1;
        alert( "hii" +data1)
      });
    });
  }

  getmovie() {
    // alert(this.m1)
    this.ser.fungetmovie({ Title: this.movie }).subscribe(dt => {
      this.moviedetail = dt;
      // alert(this.moviedetail)
    });
  }

  // getmovieId() {
  //   this.ser.fungetmoviedetails({ imdbID: this.movieId }).subscribe(dt1 => {
  //     alert(dt1);
  //     this.moviedetail1 = dt1;
  //     alert(this.moviedetail1);
  //   });
  // }

  //   getmoviesequels(){
  //     this.ser.fungetMoviesequels().subscribe(dt=>{
  //       alert(dt)
  //       this.moviesequels=dt;
  //       alert(this.moviesequels)
  //     })
  //  }
}
