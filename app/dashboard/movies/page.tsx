import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import React from 'react'
import MovieSelectors from './movie-selectors';
import MoviesData from './movies-data';

export default function MoviesDashboardPage() {
  return (
    <div className="space-y-4>">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight"> Movie</h2>
          <p className="text-muted-foreground"> Manage your movies catlog</p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4"></PlusIcon>
          Add Movie
        </Button>
      </div>
      <MovieSelectors />
      <MoviesData />
    </div>
  );
}

 
