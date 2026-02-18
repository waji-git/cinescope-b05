// import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { db } from "@/db";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = await params;
//     const objectId = new ObjectId(id);

//     let movie = await db.collection("movies").findOne({ _id: objectId });

//     if (!movie) {
//       movie = await db.collection("movies_new").findOne({ _id: objectId });
//     }

//     if (!movie) {
//       return NextResponse.json({ error: "Movie not found" }, { status: 404 });
//     }

//     // const movie =
//     //   (await db.collection("movies").findOne({_id: new ObjectId(id),})) ||
//     //   (await db.collection("movies_new").findOne({_id: new ObjectId(id)}));

//     return NextResponse.json({
//       ...movie,
//       id: movie._id.toString(),
//     });
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ unwrap params promise
    const { id } = await context.params;

    const objectId = new ObjectId(id);

    let movie = await db.collection("movies").findOne({ _id: objectId });

    if (!movie) {
      movie = await db.collection("movies_new").findOne({ _id: objectId });
    }

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...movie,
      id: movie._id.toString(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }
}
