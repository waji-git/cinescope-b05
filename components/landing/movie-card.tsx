import Image from "next/image";
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    genre: string;
    releaseYear: string;
    rating: number;
    posterUrl?: string;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-0 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={movie?.posterUrl || "/polaroid-svgrepo-com.svg"}
          alt="..."
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
        <p className="text-muted-foreground text sm">
          {movie.releaseYear} {movie.genre} {movie.rating}
        </p>
      </CardContent>
    </Card>
  );
}
