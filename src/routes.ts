import { Routes } from "@angular/router"
import { MoviesComponent } from "./app/components/movies.component"
import { MovieDetailsComponent } from "./app/components/movie-details.component"

export const appRoutes:Routes = [
  { path: "", component: MoviesComponent },
  { path: "movie/:id", component: MovieDetailsComponent }
]
