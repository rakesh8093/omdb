import { MoviesourceComponent } from './moviesource/moviesource.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieoneComponent } from './movieone/movieone.component';


const routes: Routes =

[{path:"",component:MoviesourceComponent},
  {path:"he",component:HeaderComponent},
{path:"mv",component:MovieComponent},
{path:"mc",component:MoviesourceComponent},
{path:"mo",component:MovieoneComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
