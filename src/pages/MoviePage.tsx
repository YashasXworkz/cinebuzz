
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MovieDetail from '@/components/MovieDetail';
import Footer from '@/components/Footer';
import { movies } from '@/utils/movieData';
import { Movie } from '@/utils/movieData';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    const movieId = parseInt(id || '0');
    const foundMovie = movies.find(m => m.id === movieId);
    
    setTimeout(() => {
      setMovie(foundMovie || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cinebuzz-background flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-24 bg-cinebuzz-card rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-cinebuzz-background">
        <Navigation />
        <div className="pt-24 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Movie Not Found</h1>
          <p className="text-cinebuzz-subtitle">The movie you're looking for doesn't exist or has been removed.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cinebuzz-background">
      <Navigation />
      <MovieDetail movie={movie} />
      <Footer />
    </div>
  );
};

export default MoviePage;
