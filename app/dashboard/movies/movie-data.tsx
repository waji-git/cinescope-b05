

import { searchMovies } from "@/actions/movies";
import { MovieTable } from "./movie-table";
 import { Movie } from "./type";

export default async function MovieData() {
  try {
    // Fetch movies data from the server
    const { data, success } = await searchMovies("");

    if (!success) throw new Error("No movies found in the database.");

    return <MovieTable movies={data} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}