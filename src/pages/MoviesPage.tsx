import React, { useState, useEffect } from 'react';
import { Search, Film, List, Grid, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MovieCard from '@/components/MovieCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { movies } from '@/utils/movieData';

const genres = ["All", "Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Thriller"];
const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020", "2010s", "2000s", "1990s", "Older"];
const platforms = ["All", "Netflix", "Prime Video", "Disney+", "HBO Max", "Hulu", "Apple TV+"];
const sortOptions = ["Trending", "Top Rated", "Newest", "Oldest", "Most Reviewed"];

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [sortBy, setSortBy] = useState("Trending");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  
  useEffect(() => {
    let result = [...movies];
    
    if (searchQuery) {
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedGenre !== "All") {
      result = result.filter(movie => 
        movie.genre.includes(selectedGenre)
      );
    }
    
    if (selectedYear !== "All") {
      if (selectedYear.includes("s")) {
        const decade = parseInt(selectedYear.slice(0, 4));
        result = result.filter(movie => 
          movie.year >= decade && movie.year < decade + 10
        );
      } else if (selectedYear === "Older") {
        result = result.filter(movie => movie.year < 1990);
      } else {
        const year = parseInt(selectedYear);
        result = result.filter(movie => movie.year === year);
      }
    }
    
    if (selectedPlatform !== "All") {
      result = result.filter(movie => 
        movie.platforms.some(platform => platform.name === selectedPlatform)
      );
    }
    
    switch (sortBy) {
      case "Top Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "Oldest":
        result.sort((a, b) => a.year - b.year);
        break;
      case "Most Reviewed":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Trending":
      default:
        result.sort((a, b) => (b.rating * 0.7 + b.year * 0.3) - (a.rating * 0.7 + a.year * 0.3));
        break;
    }
    
    setFilteredMovies(result);
  }, [searchQuery, selectedGenre, selectedYear, selectedPlatform, sortBy]);

  return (
    <div className="min-h-screen bg-cinebuzz-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-white font-heading">Explore Movies</h1>
            
            <div className="relative w-full md:w-72">
              <Input
                type="text"
                placeholder="Search movies..."
                className="bg-cinebuzz-card border-cinebuzz-accent pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cinebuzz-subtitle" />
            </div>
          </div>
          
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-cinebuzz-subtitle mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectGroup>
                    {sortOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm text-cinebuzz-subtitle mb-2">Genre</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectGroup>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm text-cinebuzz-subtitle mb-2">Year</label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectGroup>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm text-cinebuzz-subtitle mb-2">Platform</label>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent className="bg-cinebuzz-card border-cinebuzz-accent">
                  <SelectGroup>
                    {platforms.map(platform => (
                      <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <Badge variant="outline" className="text-white">
                {filteredMovies.length} Movies
              </Badge>
            </div>
            
            <div className="flex space-x-2">
              <Button
                size="icon"
                variant={viewMode === "grid" ? "default" : "outline"}
                className={viewMode === "grid" ? "bg-cinebuzz-accent" : ""}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant={viewMode === "list" ? "default" : "outline"}
                className={viewMode === "list" ? "bg-cinebuzz-accent" : ""}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-cinebuzz-card">
              <TabsTrigger value="all" className="flex items-center">
                <Film className="h-4 w-4 mr-2" />
                All Movies
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center">
                Trending Now
              </TabsTrigger>
              <TabsTrigger value="critics" className="flex items-center">
                Critics' Choice
              </TabsTrigger>
              <TabsTrigger value="global" className="flex items-center">
                Global Picks
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredMovies.map(movie => (
                    <div key={movie.id} className="flex gap-4 bg-cinebuzz-card p-4 rounded-lg">
                      <div className="flex-none w-20">
                        <img
                          src={movie.posterUrl}
                          alt={movie.title}
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-white font-medium">{movie.title}</h3>
                        <div className="flex items-center text-cinebuzz-subtitle text-sm mt-1">
                          <span>{movie.year}</span>
                          <span className="mx-2">•</span>
                          <span>{movie.genre.join(", ")}</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-cinebuzz-yellow mr-1" fill="currentColor" />
                          <span className="text-white">{movie.rating}</span>
                        </div>
                      </div>
                      <div className="flex-none flex items-center">
                        <Button variant="outline" size="sm" className="border-cinebuzz-accent text-cinebuzz-accent hover:bg-cinebuzz-accent hover:text-white">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {filteredMovies.length === 0 && (
                <div className="text-center py-12">
                  <Film className="h-12 w-12 text-cinebuzz-subtitle mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-white mb-2">No movies found</h3>
                  <p className="text-cinebuzz-subtitle">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="trending" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.slice(0, 5).map(movie => (
                  <MovieCard key={movie.id} movie={movie} featured={true} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="critics" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.filter(m => m.rating > 8.8).map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="global" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.slice(4, 9).map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MoviesPage;
