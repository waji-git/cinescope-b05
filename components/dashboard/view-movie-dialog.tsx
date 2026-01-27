// "use client";
// import type { WithId, Document } from "mongodb";
// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import ViewMovieForm from "./view-movie-form";

// // const [showViewDialog, setShowViewDialog] = useState(false);
// const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);



// type ViewMovieDialogProps = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   movie?: WithId<Document>;
// };


// export default function ViewMovieDialog({
//   open,
//   onOpenChange,
//   movie,
// }: ViewMovieDialogProps) {
//   //  const [showAddMovieDialog,  setShowAddMovieDialog] = useState(false);
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[37.5rem]">
//         <DialogHeader>
//           <DialogTitle>Movie Details</DialogTitle>
//         </DialogHeader>
//         {/* <ViewMovieForm showDialog={onOpenChange} movie={movie} /> */}
//         <ViewMovieForm movie={movie} />
//       </DialogContent>
//     </Dialog>
//   );
// }
