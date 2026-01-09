import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { MovieThumbnail } from "./movie-thumbnail";
import type { WithId, Document } from "mongodb";
import { Key } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
   TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { Movie } from "./type";
import { title } from 'process';


type MovieTableProps = {
  movies: WithId<Document>[];
};
export  function MovieTable({ movies }: MovieTableProps) {
   console.log(movies[0].genres);

  return (
    <div className="rounded-md-border">
      <Table>
        <TableCaption className="sr-only">Admin movie table</TableCaption>
        <TableHeader>
          <TableRow className="text-muted-foreground">
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead className="text-muted-foreground">Title</TableHead>
            <TableHead className="text-muted-foreground">Year</TableHead>
            <TableHead className="text-muted-foreground">Genre</TableHead>
            <TableHead className="text-muted-foreground">Rating</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie, key) => (
            <TableRow key={`${movie.id}-${key}`}>
              <TableCell className="font-medium">{key + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <MovieThumbnail
                    poster={movie.poster ?? "/images/no-poster.png"}
                    title={movie.title}
                  />
                  <span className="font-medium max-w-60 text-wrap line-clamp-2">
                    {movie.title}
                  </span>
                </div>
              </TableCell>
              <TableCell>{movie.year}</TableCell>

              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {movie.genres.map((genre, key) => (
                    <Badge
                      key={`genre-${key}`}
                      variant="outline"
                      className="text-xs rounded-md"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{Number(movie.imdb.rating).toFixed(1)}</TableCell>
              <TableCell>
                <Badge
                  variant={"outline"}
                  className="bg-green-100 text-green-800 rounded-md capitalize"
                >
                  {movie.status ?? "published"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ); 
}

