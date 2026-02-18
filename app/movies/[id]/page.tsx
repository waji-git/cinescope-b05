
export const dynamic = "force-dynamic";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};


export default async function MovieDetailsPage({ params }: PageProps) {
  
  
  const { id } = await params;

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/v1/movies/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const movie = await res.json();
  return (
    <section className="container py-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
      {/* Poster */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={movie.poster || "/turtle-svgrepo-com.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold">
          {movie.title} ({movie.year})
        </h1>

        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 fill-yellow-400 text-yellow-400">★</span>
            {movie.imdb.rating}/10
          </div>
          <span>{movie.runtime} min</span>
        </div>

        <div className="mt-4 flex gap-2 flex-wrap">
          {movie.genres.map((genre: string, index: number) => (
            <span key={index} className="badge badge-outline">
              {genre}
            </span>
          ))}
        </div>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          {movie.plot}
        </p>

        <p className="mt-4">
          <span className="font-semibold">Director:</span> {movie.directors}
        </p>
      </div>
    </section>
  );
}
