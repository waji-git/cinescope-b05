// import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { db } from "@/db";

// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const movie = await db
//       .collection("movies")
//       .findOne({ _id: new ObjectId(params.id) });

//     if (!movie) {
//       return NextResponse.json({ error: "Movie not found" }, { status: 404 });
//     }

//     return NextResponse.json(movie);
//   } catch (error) {
//     console.error("GET movie error:", error);
//     return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; // ✅ MUST await

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
    }

    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(id) });

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
