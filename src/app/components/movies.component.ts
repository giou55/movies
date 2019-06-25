import { Component, OnChanges } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnChanges {
  filterBy?: string = 'all';
  visibleMovies:any[] = [];

  constructor(private moviesService: MoviesService) {
    this.visibleMovies = this.moviesService.getMovies();
  }

  ngOnChanges() {
    this.visibleMovies = this.moviesService.getMovies();
  }
}
