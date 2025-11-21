import Image from "next/image";
import {
  Card,
  CardContent,
  // CardAction,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  movie: {
    _id: string;
    title: string;
    genres: string[];
    year: number;
    imdb:{
      rating: number;
      votes:number;
    };
    poster: string;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-0 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={movie.poster || "/turtle-svgrepo-com.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
        <p className="text-muted-foreground text sm">
          {movie.year} {movie.genres} {movie.imdb.rating}
        </p>
      </CardContent>
    </Card>
  );
}
