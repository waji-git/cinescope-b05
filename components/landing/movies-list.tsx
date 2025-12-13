import { getMovies } from "@/actions/movies";
import MovieCard from "./movie-card";


export default async function MoviesList() {
     const movies = await getMovies();
    //  console.log("feched movie:", movies);
//     if(!movies || movies.length===0){
// return(
//   <div className="text-red-600 text-center py-12"> no movie found</div>

// );

//     }
return (
  <div className="space-y-6">
    <div className="w-full h-[122px] bg-purple-400 rounded-lg "></div>

    <div className="text-muted-foreground text-sm">
      showing {movies.length} of 100 movies
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  </div>
);
}

