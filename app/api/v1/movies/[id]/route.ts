import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { db } from "@/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const objectId = new ObjectId(id);

    let movie = await db.collection("movies").findOne({ _id: objectId });

    if (!movie) {
      movie = await db.collection("movies_new").findOne({ _id: objectId });
    }

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    // const movie =
    //   (await db.collection("movies").findOne({_id: new ObjectId(id),})) ||
    //   (await db.collection("movies_new").findOne({_id: new ObjectId(id)}));

    return NextResponse.json({
      ...movie,
      id: movie._id.toString(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }
}





// import { NextRequest, NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { db } from "@/db";

// export async function GET(req: NextRequest) {
//   try {
//     const url = new URL(req.url);
//     const id = url.searchParams.get("id");

//     if (id) {
//       let movie;
//       try {
//         const objectId = new ObjectId(id);
//         movie = await db.collection("movies").findOne({ _id: objectId });

//         if (!movie) {
//           movie = await db.collection("movies_new").findOne({ _id: objectId });
//         }
//       } catch {
//         return NextResponse.json(
//           { error: "Invalid ID format" },
//           { status: 400 }
//         );
//       }

//       if (!movie) {
//         return NextResponse.json({ error: "Movie not found" }, { status: 404 });
//       }

//       return NextResponse.json({
//         ...movie,
//         id: movie._id.toString(),
//       });
//     } else {
//       // Fetch all movies
//       const movies1 = await db
//         .collection("movies")
//         .find({})
//         .limit(50)
//         .toArray();
//       const movies2 = await db
//         .collection("movies_new")
//         .find({})
//         .limit(50)
//         .toArray();

//       const allMovies = [...movies1, ...movies2].map((m) => ({
//         ...m,
//         id: m._id.toString(),
//       }));

//       return NextResponse.json(allMovies);
//     }
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch movies" },
//       { status: 500 }
//     );
//   }
// }
