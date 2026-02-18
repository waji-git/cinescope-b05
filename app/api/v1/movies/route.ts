

import { NextRequest, NextResponse } from "next/server";

import { db } from "@/db";

export async function GET(request: NextRequest) {
  try {
    const movies1 = await db.collection("movies").find({}).limit(50).toArray();
  const movies2 = await db.collection("movies_new").find({}).limit(50).toArray();


     const allMovies = [...movies1, ...movies2];

     return NextResponse.json(allMovies);
  } catch (error) {
    console.error("Error fetching movies from database:", error);

    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}

