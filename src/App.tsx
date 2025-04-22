
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MoviePage from "./pages/MoviePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";
import TVShowsPage from "./pages/TVShowsPage";
import TVShowDetailPage from "./pages/TVShowDetailPage";
import NotFound from "./pages/NotFound";

// Create Query Client instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tv-shows" element={<TVShowsPage />} />
            <Route path="/tv-show/:id" element={<TVShowDetailPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
