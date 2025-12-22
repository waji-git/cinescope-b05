import { getMovies } from "@/actions/movies";

import React from 'react'

export default  async function MoviesData() {
   try {const movies = await getMovies();
    if(movies){
        console.log(movies);
    }
        return <div>Movie Data</div>;
    }catch(error)
    { console.log(error);
        
    }
}

