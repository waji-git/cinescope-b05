"use client";
import type { WithId, Document } from "mongodb";
// import { Button } from '@/components/ui/button';
// import { PlusIcon } from 'lucide-react';
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";

import UpdateMovieForm from "./update-movie-form ";

type UpdateMovieDialogProps = {
  open: boolean;
  onOpenChange:(open:boolean)=>void;
  movie?: WithId<Document>;
};
// type DeleteMovieDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   movie: Movie | null;
//   onConfirmDelete: (id: string) => void;
//   isLoading: boolean;
// };


// type UpdateMovieDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   movie: Movie | null;
// };

export default function UpdateMovieDialog(
  {open,onOpenChange,movie}:UpdateMovieDialogProps)
 {
  //  const [showAddMovieDialog,  setShowAddMovieDialog] = useState(false); 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
             <DialogContent className="sm:max-w-[37.5rem]">
         <DialogHeader>
           <DialogTitle>update Movie</DialogTitle>
           <DialogDescription>
             Fill in the details to update movie.
           </DialogDescription>
         </DialogHeader>
         <UpdateMovieForm showDialog={onOpenChange} movie={movie} />
       </DialogContent>
     </Dialog>
   );
}



