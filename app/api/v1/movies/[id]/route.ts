import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(params.id) });

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error("GET movie error:", error);
    return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
  }
}
