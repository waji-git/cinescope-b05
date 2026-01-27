
// "use client";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import type { WithId, Document } from "mongodb";

// type ViewMovieFormProps = {
//   showDialog: (value: boolean) => void;
//   movie: WithId<Document>;
// };

// export default function ViewMovieForm({
//   showDialog,
//   movie,
// }: ViewMovieFormProps) {
//   return (
//     <div className="space-y-4">
//       {/* Poster */}
//       {movie.poster && (
//         <div className="flex justify-center">
//           <img
//             src={movie.poster}
//             alt={movie.title}
//             className="h-64 rounded-md object-cover"
//           />
//         </div>
//       )}

//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label>Title</Label>
//           <Input value={movie.title ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>Year</Label>
//           <Input value={movie.year ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>Director</Label>
//           <Input value={movie.director?.[0] ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>Genre</Label>
//           <Input value={movie.genres?.[0] ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>IMDb Rating</Label>
//           <Input value={movie.imdb?.rating ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>Runtime (min)</Label>
//           <Input value={movie.runtime ?? ""} readOnly />
//         </div>

//         <div>
//           <Label>Status</Label>
//           <Input value={movie.status ?? ""} readOnly />
//         </div>
//       </div>

//       <div>
//         <Label>Overview</Label>
//         <textarea
//           className="w-full rounded-md border p-2 text-sm"
//           rows={4}
//           value={movie.plot ?? ""}
//           readOnly
//         />
//       </div>

//       <DialogFooter>
//         <Button
//           type="button"
//           variant="outline"
//           onClick={() => showDialog(false)}
//         >
//           Close
//         </Button>
//       </DialogFooter>
//     </div>
//   );
// }
