import { Component, OnInit, Inject } from "@angular/core";
import { CommonapiService } from "./../commonapi.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title: object[];
  getallmovie: object[];
  // constructor(@Inject(CommonapiService) public ser) {
  //  this.ser.fungetMoviesequels().subscribe(data=>{
  //    this.getallmovie = data;
  //    console.log(this.getallmovie);
  //    this.ser.funsenddata(this.getallmovie).subscribe(data => {

  //     alert(data);
  //   });
  //  });

  // }
  ngOnInit() {}
}
