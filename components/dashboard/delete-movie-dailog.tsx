import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"; 
 import type { WithId, Document } from "mongodb";


type DeleteMovieDialogProps={
open:boolean;
onOpenChange?:(open:boolean) =>void;
movie:WithId<Document>;
isLoading?:boolean;
onConfirmDelete?: (id:string) => Promise<void>;
};


export function DeleteMovieDialog({
    open,
    onOpenChange,
    onConfirmDelete,
    isLoading,
    movie
}: DeleteMovieDialogProps)  {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="text-sm text-gray-500 my-5 text-center text-balance">
        <DialogHeader>
          <DialogTitle>Delete Movie</DialogTitle>
          <DialogDescription>
            are you want to delete this movie.?{""}
            <strong>
              {" "}
              {movie?.title ?? "N/A"} ({movie?.year ?? "N/A"})
            </strong>
            <br />
            <span className="text-xs text-orange-400">
              This action cannot be undone
            </span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => onConfirmDelete(movie?.id)}
            disabled={isLoading}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
