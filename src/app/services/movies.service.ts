import { Injectable } from '@angular/core';
import { movies } from '../models/movies.models';

@Injectable()
export class MoviesService{
    visibleMovies:any[] = [];

    getMovies(){
        return this.visibleMovies = movies;
    }

    getMovie(id: number){
        return movies.find(movie => movie.id == id);
    }
}
