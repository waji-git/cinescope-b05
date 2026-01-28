"use server";

import { db } from "@/db";
import { MovieCreate} from "@/lib/type";
import { ObjectId } from "mongodb";



export async function getMovies() {
  try {
    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${process.env.API_KEY}`,
        },
        cache: "no-store",
      }
    );

    if (!moviesResponse.ok) {
      throw new Error(`HTTP error! status: ${moviesResponse.status}`);
    }

    if (moviesResponse.status === 200) {
      return await moviesResponse.json();
    } else {
      console.log("No movies found or error occurred.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function searchMovies(query: string) {
  try {
    const movies = await db
      .collection("movies_new")
      .find({ title: { $regex: query, $options: "i" } }) // Case-insensitive search
      .limit(50)
      .toArray();

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: `${movies.length} movies found.`,
        data: movies,
      };
    } else {
      return {
        success: false,
        message: "No movies found matching your query.",
        data: [],
      };
    }
  } catch (error) {
    console.log("MongoDB query error:", error);
    return {
      success: false,
      message: "An error occurred while searching for movies.",
      data: [],
    };
  }
}

export async function createMovie(movie:MovieCreate) {
  try {
    const result = await db.collection("movies_new").insertOne(movie);

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie created successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to create movie.",
      };
    }
  } catch (error) {
    console.log("MongoDB insert error:", error);
    return {
      success: false,
      message: "An error occurred while creating the movie.",
    };
  }
}

//  export async function updateMovie(id:string, movie: MovieCreate) {

//   try {
//     const result = await db
//       .collection("movies_new")
//       .updateOne(
//         { _id: ObjectId.createFromHexString(id) },
//         { $set: movie },
//         { upsert: false }
//       );

//     if (result.acknowledged) {
//       return {
//         success: true,
//         message: "Movie updatedsuccessfully.",
//       };
//     } else {
//       return {
//         success: false,
//         message: "Failed to updatemovie.",
//       };
//     }
//   } catch (error) {
//     console.log("MongoDB insert error:", error);
//     return {
//       success: false,
//       message: "An error occurred while creating the movie.",
//     };
//   }
// }


export async function updateMovie(id: string, formData: FormData) {
  try {
    const movie: MovieCreate = {
      title: formData.get("title") as string,
      year: formData.get("year") as string,
      directors: [formData.get("directors") as string],
      genres: [formData.get("genres") as string],
      imdb: {
        rating: Number(formData.get("rating")),
      },
      runtime: formData.get("runtime") || "",
      plot: formData.get("plot") as string,
      poster: formData.get("poster") as string,
      backdrop: formData.get("backdrop") as string,
      status: formData.get("status") as string,
      lastUpdated: formData.get("lastUpdated") as string,
    };

    const result = await db
      .collection("movies_new")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: false }
      );

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie updated successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to update movie.",
      };
    }
  } catch (error) {
    console.log("MongoDB update error:", error);
    return {
      success: false,
      message: "An error occurred while updating the movie.",
    };
  }
}


export async function deleteMovie(id: string) {
  try {
    const result = await db
      .collection("movies_new")
      .deleteOne (
        { _id: ObjectId.createFromHexString(id) });
       

    if(result.acknowledged) {
      return {
        success: true,
        message: "Movie deletesuccessfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to deletemovie.",
      };
    }
  } catch (error) {
    console.log("MongoDBdelete error:", error);
    return {
      success: false,
      message: "An error occurred while delete the movie.",
    };
  }
}