"use server"
// import { NextResponse } from "next/server";

// import { db } from "@/db";


export const getMovies = async () => {
  try {
    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // corrected from 'catch'
      }
    );
    
    if (!moviesResponse.ok) {
       throw new Error(`HTTP ERROR! status: ${moviesResponse.status}`);
    
    }
    
    if (moviesResponse.status===200) {
        return await moviesResponse.json();
           }else{
      console.log("no movie found or error occured.");
    return[];
}
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// const data = await moviesResponse.json();
//     return data || [];