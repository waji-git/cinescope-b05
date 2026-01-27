"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { MovieThumbnail } from "./movie-thumbnail";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

import UpdateMovieDialog from "@/components/dashboard/update-movie-diolog ";
import { DeleteMovieDialog } from "@/components/dashboard/delete-movie-dailog";
import { deleteMovie } from "@/actions/movies";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
// import ViewMovieDialog from "@/components/dashboard/view-movie -dialog";

type MovieTableProps = {
  movies: Movie[];
};

export function MovieTable({ movies }: MovieTableProps) {
  const router = useRouter();
  // const [showViewDialog, setShowViewDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const handleDeleteMovie = async (movieId: string) => {
    setIsLoading(true);
    const response = await deleteMovie(movieId);
   
    setIsLoading(false);

    if (response?.success) {
      setShowDeleteDialog(false);
      setSelectedMovie(null);
      router.refresh();
    }
  };


  const  getStatusClass =(status:string) =>{
switch (status) {
  case "published":
    return "bg-green-100 text-green-800 border-green-200";

  case "draft":
    return "bg-yellow-100 text-yellow-800 border-yellow-200";
  case "archived":
    return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
}
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption className="sr-only">Admin movie table</TableCaption>

        <TableHeader>
          <TableRow className="text-muted-foreground">
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {movies.map((movie, index) => (
            <TableRow key={movie.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <MovieThumbnail
                    poster={movie.poster ?? "/images/no-poster.png"}
                    title={movie.title}
                  />
                  <span className="font-medium max-w-60 line-clamp-2">
                    {movie.title}
                  </span>
                </div>
              </TableCell>

              <TableCell>{movie.year}</TableCell>

              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {movie.genres.map((genre, i) => (
                    <Badge
                      key={i}
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
                  variant="outline"
                  className={cn(
                    "rounded-md capitalize",
                    getStatusClass(movie.status)
                  )}
                >
                  {movie.status ?? "published"}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                       onClick={() => {
                setSelectedMovie(movie);
                // setShowViewDialog(true);
                    }}

                    >
                      View Details
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedMovie(movie);
                        setShowUpdateDialog(true);
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => {
                        setShowDeleteDialog(true);
                        setSelectedMovie(movie);
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>



      <UpdateMovieDialog
        open={showUpdateDialog}
        onOpenChange={setShowUpdateDialog}
        movie={selectedMovie}
      />
      <DeleteMovieDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirmDelete={handleDeleteMovie}
        isLoading={isloading}
        movie={selectedMovie}
      />
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { MoreHorizontalIcon } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { MovieThumbnail } from "./movie-thumbnail";
// import UpdateMovieDialog from "@/components/dashboard/update-movie-diolog ";
// import { DeleteMovieDialog } from "@/components/dashboard/delete-movie-dailog";
// import { deleteMovie } from "@/actions/movies";
// import type { Movie } from "./type";

// type MovieTableProps = {
//   movies: Movie[];
// };

// export function MovieTable({ movies }: MovieTableProps) {
//   const router = useRouter();

//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
//   const [showUpdateDialog, setShowUpdateDialog] = useState(false);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDeleteMovie = async (movieId: string) => {
//     setIsLoading(true);
//     const response = await deleteMovie(movieId);
//     setIsLoading(false);

//     if (response?.success) {
//       setShowDeleteDialog(false);
//       setSelectedMovie(null);
//       router.refresh();
//     }
//   };

//   const getStatusClass = (status: string) => {
//     switch (status) {
//       case "published":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "draft":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       case "archived":
//         return "bg-red-100 text-red-800 border-red-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>#</TableHead>
//             <TableHead>Title</TableHead>
//             <TableHead>Year</TableHead>
//             <TableHead>Genre</TableHead>
//             <TableHead>Rating</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {movies.map((movie, index) => (
//             <TableRow key={movie.id}>
//               <TableCell>{index + 1}</TableCell>

//               <TableCell>
//                 <div className="flex items-center gap-2">
//                   <MovieThumbnail
//                     poster={movie.poster ?? "/images/no-poster.png"}
//                     title={movie.title}
//                   />
//                   {movie.title}
//                 </div>
//               </TableCell>

//               <TableCell>{movie.year}</TableCell>

//               <TableCell>
//                 {movie.genres.map((g) => (
//                   <Badge key={g} variant="outline">
//                     {g}
//                   </Badge>
//                 ))}
//               </TableCell>

//               <TableCell>{movie.imdb.rating.toFixed(1)}</TableCell>

//               <TableCell>
//                 <Badge
//                   variant="outline"
//                   className={cn("capitalize", getStatusClass(movie.status))}
//                 >
//                   {movie.status}
//                 </Badge>
//               </TableCell>

//               <TableCell className="text-right">
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon">
//                       <MoreHorizontalIcon />
//                     </Button>
//                   </DropdownMenuTrigger>

//                   <DropdownMenuContent align="end">
//                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem
//                       onClick={() => {
//                         setSelectedMovie(movie);
//                         setShowUpdateDialog(true);
//                       }}
//                     >
//                       Edit
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       className="text-destructive"
//                       onClick={() => {
//                         setSelectedMovie(movie);
//                         setShowDeleteDialog(true);
//                       }}
//                     >
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <UpdateMovieDialog
//         open={showUpdateDialog}
//         onOpenChange={setShowUpdateDialog}
//         movie={selectedMovie}
//       />

//       <DeleteMovieDialog
//         open={showDeleteDialog}
//         onOpenChange={setShowDeleteDialog}
//         movie={selectedMovie}
//         isLoading={isLoading}
//         onConfirmDelete={(id) => handleDeleteMovie(id)}
//       />
//     </>
//   );
// }
