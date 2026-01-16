import { Suspense } from "react";
import { getMovies } from "@/actions/movies";
import MovieCard, { MoviesCardSkelton } from "./movie-card";
import { Skeleton } from "@/components/ui/skeleton";


 export default async function MoviesList() {
 await new Promise((resolve) => setTimeout(resolve, 5000));
   const movies = await getMovies();
     console.log("feched movie:", movies);

return (
  <>
    <div className="text-muted-foreground text-sm">
      showing {movies.length} of 100 movies
    </div>  
    
    <div className="grid grid-cols-1 gap-6 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  </>
);
}

export function MoviesListSkelton() {
  return (
    <>
      <Skeleton className="h-4 w-56" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 })
          .fill(0)
          .map((_, i) => (
            <MoviesCardSkelton key={i} />
          ))}
      </div>
    </>
  );
}
