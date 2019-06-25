import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie:any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.movie = this.moviesService.getMovie(this.route.snapshot.params['id'])
  }
}
