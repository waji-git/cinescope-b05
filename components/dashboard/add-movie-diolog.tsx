"use client"
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddMovieForm from "./add-movie-form";


export default function AddMovieDiolog() {
    const [showAddMovieDialog, setShowAddMovieDialog] = useState(false);
  return (    
     <Dialog open={showAddMovieDialog} onOpenChange={setShowAddMovieDialog}>
   <DialogTrigger asChild>
     <Button>
       <PlusIcon className="mr-2 h-4 w-4" />
       Add Movie
     </Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[37.5rem]">
     <DialogHeader>
       <DialogTitle>Add New Movie</DialogTitle>
       <DialogDescription>
         Fill in the details to add a new movie to your catalog.
       </DialogDescription>
     </DialogHeader>
    <AddMovieForm />
   </DialogContent>
 </Dialog>
  );
}



