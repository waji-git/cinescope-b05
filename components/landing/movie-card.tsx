
"use client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "../ui/button";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Movie } from "@/lib/type";
type MovieCardProps = {
  

    movie:Movie;
  
};



export default function MovieCard({ movie }: MovieCardProps) {
  const[posterUrl, setPosterUrl] = useState(movie.poster);
  
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-2 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={posterUrl || "/turtle-svgrepo-com.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
          onError={() => setPosterUrl("/turtle-svgrepo-com.svg")}
        />
      </div>

      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
        <p className="text-muted-foreground text sm">
          {movie.year} - {movie.runtime} min
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Badge
              key={`genre-${index}`}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              {genre}
            </Badge>
          ))}
          {movie.genres.length > 2 && (
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              +{movie.genres.length - 2}{" "}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between p-4 pt-0">
        <div className="flex items-center">
          <span className="text-primary text-sm font-medium">
            {movie.imdb.rating}/10
          </span>
        </div>
        <Button variant="ghost" size="sm" className="hour:text-primary">
          details
        </Button>
      </CardFooter>
    </Card>
  );
}

export function MoviesCardSkelton(){
return(
<div className="overflow-hidden rounded-lg">
<Skeleton className="aspect-2/3 w-full" />
<div className="p-4">
<div className="space-y-2">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className=" h-4 w-1/2" />
  </div>

<div className="flex-mt-gap-1">
  <Skeleton className="h-5 w-1/5" />
  <Skeleton className=" h-5 w-1/5" />
  </div>

<div className="flex-justify-between gap-2 mt-6">
  <Skeleton className="h-6 w-16 rounded-full" />
  <Skeleton className=" h-6 w-16 rounded-full" />
  </div>
</div>
</div>

);
}




