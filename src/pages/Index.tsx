
import React from 'react';
import Hero from '@/components/Hero';
import TrendingSection from '@/components/TrendingSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { trendingMovies, topRatedMovies, movies } from '@/utils/movieData';

const Index = () => {
  // Use the first movie for the hero section
  const heroMovie = movies[0];

  return (
    <div className="min-h-screen bg-cinebuzz-background">
      <Navigation />
      
      <main>
        <Hero movie={heroMovie} />
        
        <div className="py-4">
          <TrendingSection title="Trending Now" movies={trendingMovies} featured={true} />
          <TrendingSection title="Top Rated" movies={topRatedMovies} />
          <TrendingSection title="New Releases" movies={movies.slice(5, 10)} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
