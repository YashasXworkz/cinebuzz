
import React, { useState } from 'react';
import { Star, Clock, Plus, Share2, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Movie } from '@/utils/movieData';

interface MovieDetailProps {
  movie: Movie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="pt-16">
      {/* Backdrop with gradient overlay */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${movie.backdropUrl})`,
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-cinebuzz-background via-cinebuzz-background/70 to-transparent opacity-100"></div>
        </div>
      </div>
      
      {/* Movie details */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-72 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex-none">
            <div className="w-48 md:w-64 aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Details */}
          <div className="flex-grow">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-3">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-cinebuzz-yellow mr-1" fill="currentColor" />
                <span className="text-white font-bold">{movie.rating}</span>
                <span className="text-cinebuzz-subtitle ml-1">/10</span>
              </div>
              
              <div className="text-cinebuzz-subtitle">{movie.year}</div>
              
              <div className="flex items-center text-cinebuzz-subtitle">
                <Clock className="h-4 w-4 mr-1" />
                {movie.runtime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
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
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                className="bg-cinebuzz-accent hover:bg-cinebuzz-accent/90 text-white flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Trailer
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 flex items-center"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add to Watchlist
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 flex items-center"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Available on</h3>
              <div className="flex gap-4">
                {movie.platforms.map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cinebuzz-card hover:bg-cinebuzz-card/70 py-2 px-4 rounded-lg transition-colors"
                  >
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="h-8 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setSelectedTab}>
            <TabsList className="bg-cinebuzz-card w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="similar">Similar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Synopsis</h3>
                  <p className="text-cinebuzz-subtitle leading-relaxed">{movie.plot}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium">Director</h4>
                      <p className="text-cinebuzz-subtitle">{movie.director}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Genre</h4>
                      <p className="text-cinebuzz-subtitle">{movie.genre.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Release Year</h4>
                      <p className="text-cinebuzz-subtitle">{movie.year}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Runtime</h4>
                      <p className="text-cinebuzz-subtitle">{movie.runtime}</p>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={movie.trailerUrl}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cast" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="bg-cinebuzz-card rounded-lg p-4 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-cinebuzz-primary mb-3 overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/150?img=${index + 10}`} 
                        alt={actor} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-white font-medium">{actor}</h4>
                    <p className="text-cinebuzz-subtitle text-sm">Character Name</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">User Reviews</h3>
                  <Button className="bg-cinebuzz-accent text-white hover:bg-cinebuzz-accent/90">
                    Write a Review
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-cinebuzz-card rounded-lg p-4">
                      <div className="flex items-start mb-3">
                        <div className="w-10 h-10 rounded-full bg-cinebuzz-primary overflow-hidden mr-3">
                          <img 
                            src={`https://i.pravatar.cc/150?img=${item + 20}`} 
                            alt="User" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="text-white font-medium">User Name</h4>
                            <div className="ml-3 flex">
                              {Array(5).fill(0).map((_, index) => (
                                <Star 
                                  key={index} 
                                  className={`h-4 w-4 ${index < 4 ? 'text-cinebuzz-yellow' : 'text-gray-600'}`} 
                                  fill="currentColor" 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-cinebuzz-subtitle text-xs">Posted on April 15, 2023</p>
                        </div>
                      </div>
                      <p className="text-cinebuzz-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                        Praesent eget nisl id nunc ultrices finibus. Duis eros ex, malesuada at 
                        pretium nec, tristique eget sapien.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="similar" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {/* Sample similar movies - would be fetched from API in real application */}
                {[3, 5, 7, 9, 2].map((id) => {
                  const similarMovie = movie.id === id ? 
                    movies.find(m => m.id !== movie.id) : 
                    movies.find(m => m.id === id);
                  
                  if (!similarMovie) return null;
                  
                  return (
                    <MovieCard key={id} movie={similarMovie} />
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
