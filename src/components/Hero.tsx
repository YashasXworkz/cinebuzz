
import React from 'react';
import { PlayCircle, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Movie } from '@/utils/movieData';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${movie.backdropUrl})`,
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinebuzz-background via-transparent to-transparent opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cinebuzz-background via-transparent to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-end pb-16">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white font-heading text-shadow">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-cinebuzz-yellow text-black font-bold">
              IMDb {movie.rating}
            </Badge>
            <span className="text-cinebuzz-subtitle">{movie.year}</span>
            <span className="text-cinebuzz-subtitle">{movie.runtime}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((genre, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-white border-white/30"
              >
                {genre}
              </Badge>
            ))}
          </div>
          
          <p className="text-cinebuzz-subtitle mb-8 max-w-xl">
            {movie.plot}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-cinebuzz-accent hover:bg-cinebuzz-accent/90 text-white flex items-center"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 flex items-center"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add to Watchlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
