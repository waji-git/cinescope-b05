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
  director:string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
};
