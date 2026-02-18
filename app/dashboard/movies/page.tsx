

import React from "react";
import MovieSelectors from "./movie-selectors";
import MovieData from "./movie-data";
import AddMovieDiolog from "@/components/dashboard/add-movie-dialog";

type MoviesDashboardPageProps = {
  searchParams: {
    q?: string;
  };
};


export default async function MoviesDashboardPage(
  props: MoviesDashboardPageProps,
 ) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">Manage your movies catalog</p>
        </div>
        <AddMovieDiolog />
      </div>

      <MovieSelectors />
      <MovieData query={query} />
    </div>
  );
}
