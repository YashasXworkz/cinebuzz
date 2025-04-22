
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tvShows, TVShow } from '@/utils/tvShowsData';
import TVShowCard from '@/components/TVShowCard';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search, Layout, Grid } from 'lucide-react';
import { Input } from "@/components/ui/input";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TVShowsPage: React.FC = () => {
  const [filteredShows, setFilteredShows] = useState<TVShow[]>(tvShows);
  const [activeLanguage, setActiveLanguage] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<string>("grid");
  const [activeStatus, setActiveStatus] = useState<string>("All");

  const languages = ["All", "English", "Hindi", "Telugu", "Tamil"];
  const statuses = ["All", "Ongoing", "Completed", "Upcoming"];

  useEffect(() => {
    let filtered = tvShows;

    // Filter by language
    if (activeLanguage !== "All") {
      filtered = filtered.filter(show => show.language === activeLanguage);
    }

    // Filter by status
    if (activeStatus !== "All") {
      filtered = filtered.filter(show => show.status === activeStatus);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(show => 
        show.title.toLowerCase().includes(query) ||
        show.genre.some(g => g.toLowerCase().includes(query))
      );
    }

    setFilteredShows(filtered);
  }, [activeLanguage, searchQuery, activeStatus]);

  const handleLanguageChange = (value: string) => {
    setActiveLanguage(value);
  };

  const handleStatusChange = (value: string) => {
    setActiveStatus(value);
  };

  return (
    <div className="min-h-screen bg-cinebuzz-background text-white pb-16">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Popular TV Shows</h1>
          <p className="text-cinebuzz-subtitle text-lg">
            Discover the most trending and critically acclaimed TV shows across different languages!
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinebuzz-subtitle" size={18} />
              <Input
                type="text"
                placeholder="Search shows, genres..."
                className="pl-10 bg-cinebuzz-card border-none text-white placeholder:text-cinebuzz-subtitle"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-cinebuzz-subtitle">View:</span>
              <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)}>
                <ToggleGroupItem value="grid" aria-label="Grid View">
                  <Grid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List View">
                  <Layout className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Languages</h3>
            <RadioGroup 
              className="flex flex-wrap gap-2" 
              defaultValue={activeLanguage}
              onValueChange={handleLanguageChange}
            >
              {languages.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={language} 
                    id={`language-${language}`} 
                    className="peer sr-only" 
                  />
                  <label
                    htmlFor={`language-${language}`}
                    className="flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-full bg-cinebuzz-card border border-transparent peer-data-[state=checked]:bg-cinebuzz-accent peer-data-[state=checked]:text-white cursor-pointer hover:bg-cinebuzz-dark transition-colors"
                  >
                    {language}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Status</h3>
            <RadioGroup 
              className="flex flex-wrap gap-2" 
              defaultValue={activeStatus}
              onValueChange={handleStatusChange}
            >
              {statuses.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={status} 
                    id={`status-${status}`} 
                    className="peer sr-only" 
                  />
                  <label
                    htmlFor={`status-${status}`}
                    className="flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-full bg-cinebuzz-card border border-transparent peer-data-[state=checked]:bg-cinebuzz-accent peer-data-[state=checked]:text-white cursor-pointer hover:bg-cinebuzz-dark transition-colors"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {filteredShows.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {filteredShows.map(show => (
                  <TVShowCard key={show.id} show={show} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredShows.map(show => (
                  <div 
                    key={show.id} 
                    className="flex bg-cinebuzz-card p-3 rounded-lg hover:bg-cinebuzz-dark/70 transition-colors"
                  >
                    <img 
                      src={show.poster} 
                      alt={show.title} 
                      className="w-20 h-28 object-cover rounded-md mr-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-white">{show.title}</h3>
                        <div className="flex items-center bg-cinebuzz-dark px-2 py-0.5 rounded">
                          <Star className="h-3 w-3 text-cinebuzz-yellow mr-1" />
                          <span className="text-xs">{show.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-cinebuzz-subtitle mt-1">
                        <span>{show.year}</span>
                        <span className="mx-2">•</span>
                        <span>{show.language}</span>
                        <span className="mx-2">•</span>
                        <span>S{show.seasons} ({show.episodes} Eps)</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {show.genre.map((genre, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-cinebuzz-background/70 px-2 py-0.5 rounded"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-cinebuzz-subtitle mt-2 line-clamp-2">
                        {show.synopsis}
                      </p>
                      <div className="mt-2 flex gap-1">
                        {show.platform.map((platform, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-cinebuzz-accent/20 text-cinebuzz-accent px-2 py-0.5 rounded-full"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-xl text-cinebuzz-subtitle">No TV shows found matching your criteria</p>
            <button 
              onClick={() => {
                setActiveLanguage("All");
                setActiveStatus("All");
                setSearchQuery("");
              }} 
              className="mt-4 px-4 py-2 bg-cinebuzz-accent text-white rounded-md hover:bg-cinebuzz-accent/80 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default TVShowsPage;
