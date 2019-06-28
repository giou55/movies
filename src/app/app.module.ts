import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MoviesService } from './services/movies.service';
import { MovieFilterPipe } from './pipes/filter.pipe';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies.component';
import { MovieDetailsComponent } from './components/movie-details.component';
import { HeaderComponent } from './components/header.component';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService, MovieFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
