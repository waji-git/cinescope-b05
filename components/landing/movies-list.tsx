import MovieCard from "./movie-card";

const MOVIES =[
{id:1,
title: "cobra",
genre:"SCI-fi",
releaseYear:2015,
rating:7.5,
},


{id:2,
title: "ninja",
genre:"SCI-fi",
releaseYear:2010,
rating:6.5,
},

{id:3,
title: "Rumbo",
genre:"SCI-fi",
releaseYear:2008,
rating:9.5,
},    
{id:4,
title: "Knight Rider",
genre:"SCI-fi",
releaseYear:2011,
rating:6.5,
}
];
export default function MoviesList() {
    
return (
    <div className='grid grid-cols-1 gap-6 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4' >
        { MOVIES.map((movie) => (
          <MovieCard key = {movie.id} movie ={movie}/>
          ))}   
            </div>
  );
}

