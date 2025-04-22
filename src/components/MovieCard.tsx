
import React from 'react';
import { Star, Plus } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Movie } from '@/utils/movieData';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, featured = false }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className={`overflow-hidden bg-transparent border-0 ${featured ? 'w-full' : 'w-full'} movie-card-hover`}>
        <div className="relative aspect-[2/3] overflow-hidden rounded-md">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover transition-transform duration-300"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 hover:bg-cinebuzz-accent text-white"
              onClick={(e) => {
                e.preventDefault();
                // Add to watchlist logic here
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute bottom-2 left-2 flex items-center bg-black/60 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-cinebuzz-yellow mr-1" fill="currentColor" />
            <span className="text-xs font-medium text-white">{movie.rating}</span>
          </div>
          
          {featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-cinebuzz-accent text-white">Featured</Badge>
            </div>
          )}
        </div>
        
        <CardContent className="pt-3 px-1">
          <h3 className="font-medium text-white line-clamp-1">{movie.title}</h3>
          <p className="text-xs text-cinebuzz-subtitle mt-1">{movie.year}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
