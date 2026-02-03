export type Movie = {
  _id: string;
  title: string;
  year: number;
  genres: string[];
  // rating: string;
  runtime: number;
  status: string;
  poster?: string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
};

export type MovieCreate = {
  title: FormDataEntryValue;
  year: FormDataEntryValue;
  directors: FormDataEntryValue[];
  genres: FormDataEntryValue[];
  imdb: {
    rating: number;
  };
  runtime: FormDataEntryValue;
  plot: FormDataEntryValue;
  poster: FormDataEntryValue;
  backdrop: FormDataEntryValue;
  status: FormDataEntryValue;
  lastUpdated: string;
};

