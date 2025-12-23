import { getMovies } from "@/actions/movies";

import React from 'react'

export default  async function MoviesData() {
   try {const movies = await getMovies();
    if(movies){
        console.log(movies);
    }
         return <div className="mt-4 font-bold">Movies Data</div>;
    }catch(error)
    { console.log(error);
        
    }
}

