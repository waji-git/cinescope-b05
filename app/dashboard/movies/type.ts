export type Movie = {
  id: string;
  title: string;
  year: number;
  genres: string[];
  plot:string;
  rated:string;
  runtime:number;
   backdrop:string;
  status: string;
  poster: string;
  directors:string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
};
