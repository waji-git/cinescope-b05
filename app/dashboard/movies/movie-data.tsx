import { getMovies } from "@/actions/movies";
import React from 'react'
import { MovieTable } from "./movie-table";
import { title } from "process";


export default  async function MovieData() {
   try {const movies = await getMovies();
    if(movies){
        console.log(movies);
    }
         return <MovieTable movies ={movies} />;
    }catch(error)
    { console.log(error);
        
    }
}

