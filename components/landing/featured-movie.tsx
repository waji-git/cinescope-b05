import React, { Suspense } from "react";
// import { Button } from "../ui/button";
import { Button } from "@/components/ui/button";
import MoviesList, { MoviesListSkelton } from "./movies-list";

export default function FeaturedMovie() {
  return (
    <section
      id="featured-movie"
      className="container-8xl px-4 py-6 md:px-6 w-full"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">FeaturedMovie</h2>
          <p className="text-muted-foreground">
            Explore latest & gretested movies that are making waves in the
            cinema world
          </p>
        </div>
        <Button variant={"outline"}> view all</Button>
        {/* <Button variant =""> view all</Button> */}
      </div>
      <div className="space-y-6">
        <div className="w-full h-[122px] bg-purple-400 rounded-lg "></div>

        <Suspense fallback={<MoviesListSkelton />}>
          <MoviesList />
        </Suspense>
      </div>
    </section>
  );
}
