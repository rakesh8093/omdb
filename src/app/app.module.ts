import { CommonapiService } from './commonapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MovieoneComponent } from './movieone/movieone.component';
import { MoviesourceComponent } from './moviesource/moviesource.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    MovieoneComponent,
    MoviesourceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [CommonapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
