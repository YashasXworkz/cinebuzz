
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tvShows } from '@/utils/tvShowsData';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, Clock, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TVShowDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const show = tvShows.find(show => show.id === Number(id));
  
  if (!show) {
    return (
      <div className="min-h-screen bg-cinebuzz-background text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">TV Show not found</h1>
        <Button onClick={() => navigate('/tv-shows')} variant="outline">
          Back to TV Shows
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cinebuzz-background text-white">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section with Backdrop */}
        <div 
          className="relative w-full h-[50vh] bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(18,18,18,1)), url(${show.poster})` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cinebuzz-background via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <Button 
              variant="ghost" 
              className="absolute top-8 left-4 md:left-8 text-white" 
              onClick={() => navigate('/tv-shows')}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="md:w-1/4">
              <img 
                src={show.poster} 
                alt={show.title} 
                className="rounded-lg shadow-xl w-full max-w-xs mx-auto md:mx-0 aspect-[2/3] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            
            {/* Details */}
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-2 mb-3">
                {show.genre.map((genre, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-cinebuzz-dark px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{show.title}</h1>
              
              <div className="flex items-center gap-3 text-cinebuzz-subtitle mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-cinebuzz-yellow mr-1" />
                  <span className="font-medium">{show.rating.toFixed(1)}</span>
                </div>
                <span>•</span>
                <span>{show.year}</span>
                <span>•</span>
                <span>{show.language}</span>
                <span>•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>S{show.seasons} ({show.episodes} Eps)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Synopsis</h3>
                <p className="text-cinebuzz-subtitle">{show.synopsis}</p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="gap-2 bg-cinebuzz-accent hover:bg-cinebuzz-accent/80">
                  <Play className="h-4 w-4" />
                  Watch Now
                </Button>
                <Button variant="outline" className="border-cinebuzz-accent text-cinebuzz-accent hover:bg-cinebuzz-accent/10">
                  + Add to Watchlist
                </Button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Available On</h3>
                <div className="flex flex-wrap gap-2">
                  {show.platform.map((platform, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-2 bg-cinebuzz-dark rounded-md text-sm font-medium"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Status</h3>
                <div className={`inline-block px-4 py-2 rounded-md text-sm font-medium ${
                  show.status === 'Ongoing' 
                    ? 'bg-green-900/30 text-green-400' 
                    : show.status === 'Completed' 
                    ? 'bg-blue-900/30 text-blue-400' 
                    : 'bg-yellow-900/30 text-yellow-400'
                }`}>
                  {show.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TVShowDetailPage;
