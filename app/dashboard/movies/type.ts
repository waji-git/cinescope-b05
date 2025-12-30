export type Movie = {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: string;
  status: string;
  poster?: string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
};
