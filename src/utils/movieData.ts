
export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  year: number;
  rating: number;
  runtime: string;
  genre: string[];
  plot: string;
  director: string;
  cast: string[];
  trailerUrl: string;
  platforms: Platform[];
}

export interface Platform {
  name: string;
  logo: string;
  url: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  following: number;
  followers: number;
  watchlist: number[];
  reviews: number;
}

// Sample platforms
const platforms: Platform[] = [
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
    url: "https://netflix.com"
  },
  {
    name: "Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png",
    url: "https://primevideo.com"
  },
  {
    name: "Disney+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png",
    url: "https://disneyplus.com"
  },
  {
    name: "HBO Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/2560px-HBO_Max_Logo.svg.png",
    url: "https://hbomax.com"
  }
];

// Sample movies
export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    year: 2010,
    rating: 8.8,
    runtime: "2h 28m",
    genre: ["Action", "Sci-Fi", "Thriller"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    platforms: [platforms[0], platforms[1]]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    year: 1994,
    rating: 9.3,
    runtime: "2h 22m",
    genre: ["Drama"],
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
    platforms: [platforms[1], platforms[3]]
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    year: 2008,
    rating: 9.0,
    runtime: "2h 32m",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    platforms: [platforms[0], platforms[2]]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    year: 1994,
    rating: 8.9,
    runtime: "2h 34m",
    genre: ["Crime", "Drama"],
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    platforms: [platforms[1], platforms[3]]
  },
  {
    id: 5,
    title: "The Lord of the Rings: The Return of the King",
    posterUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg",
    year: 2003,
    rating: 8.9,
    runtime: "3h 21m",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom"],
    trailerUrl: "https://www.youtube.com/embed/r5X-hFf6Bwo",
    platforms: [platforms[0], platforms[2]]
  },
  {
    id: 6,
    title: "Forrest Gump",
    posterUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
    year: 1994,
    rating: 8.8,
    runtime: "2h 22m",
    genre: ["Drama", "Romance"],
    plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    trailerUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
    platforms: [platforms[1], platforms[3]]
  },
  {
    id: 7,
    title: "The Matrix",
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    year: 1999,
    rating: 8.7,
    runtime: "2h 16m",
    genre: ["Action", "Sci-Fi"],
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
    platforms: [platforms[0], platforms[2]]
  },
  {
    id: 8,
    title: "Goodfellas",
    posterUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/sw7mordbZxgITU877yTpZCud90M.jpg",
    year: 1990,
    rating: 8.7,
    runtime: "2h 26m",
    genre: ["Crime", "Drama"],
    plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
    trailerUrl: "https://www.youtube.com/embed/qo5jJpHtI1Y",
    platforms: [platforms[1], platforms[3]]
  },
  {
    id: 9,
    title: "Fight Club",
    posterUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    year: 1999,
    rating: 8.8,
    runtime: "2h 19m",
    genre: ["Drama"],
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf"],
    trailerUrl: "https://www.youtube.com/embed/qtRKdVHc-cE",
    platforms: [platforms[0], platforms[2]]
  },
  {
    id: 10,
    title: "The Godfather",
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    year: 1972,
    rating: 9.2,
    runtime: "2h 55m",
    genre: ["Crime", "Drama"],
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    trailerUrl: "https://www.youtube.com/embed/sY1S34973zA",
    platforms: [platforms[1], platforms[3]]
  }
];

// Sample trending movies (using the same movies for now)
export const trendingMovies = movies.slice(0, 5);

// Sample top rated movies (using the same movies for now)
export const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);

// Sample user
export const currentUser: User = {
  id: 1,
  name: "John Doe",
  username: "cinegeek",
  avatar: "https://i.pravatar.cc/150?img=32",
  bio: "Movie enthusiast and aspiring film critic. Love discussing cinema and finding hidden gems.",
  following: 85,
  followers: 120,
  watchlist: [1, 3, 5, 7],
  reviews: 42
};
