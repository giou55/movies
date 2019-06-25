import { Routes } from "@angular/router"
import { MoviesComponent } from "./app/components/movies.component"
import { MovieDetailComponent } from "./app/components/movie-detail.component"

export const appRoutes:Routes = [
  { path: "", component: MoviesComponent },
  { path: "movie/:id", component: MovieDetailComponent }
]
