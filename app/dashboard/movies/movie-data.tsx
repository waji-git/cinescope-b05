

// import { searchMovies } from "@/actions/movies";
// import { MovieTable } from "./movie-table";
//  import { Movie } from "./type";

// export default async function MovieData() {
//   try {
//     // Fetch movies data from the server
//     const { data, success } = await searchMovies("");

//     if (!success) throw new Error("No movies found in the database.");

//     return <MovieTable movies={data} />;
//   } catch {
//     return <div>No Movies Available!</div>;
//   }
// }

import { searchMovies } from "@/actions/movies";
import { MovieTable } from "./movie-table";
// import { Movie } from "./type";

export default async function MovieData() {
  try {
    // Fetch movies data from the server
    const { data, success } = await searchMovies("");

    if (!success) throw new Error("No movies found in the database.");

    // console.log("Movies fetched:", data);

    const refinedData = data.map((movie) => ({
      id: movie._id.toString(),
      title: movie.title,
      year: movie.year,
      plot: movie.plot,
      rated: movie.rated,
      genres: movie.genres,
      poster: movie.poster,
      backdrop: movie.backdrop,
      imdb: movie.imdb,
      runtime: movie.runtime,
      status: movie.status ?? "published",
      directors: movie.directors,
    }));

    return <MovieTable movies={refinedData} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}