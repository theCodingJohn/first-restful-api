let movies = [
  {
    id: 1,
    movie_title: "Igor",
    year: 2004,
  },
  {
    id: 2,
    movie_title: "Crossroads",
    year: 2007,
  },
  {
    id: 3,
    movie_title: "X, Y and Zee (Zee and Co.)",
    year: 1966,
  },
  {
    id: 4,
    movie_title: "Cloak and Dagger",
    year: 2000,
  },
  {
    id: 5,
    movie_title: "Conspiracy, The",
    year: 2013,
  },
  {
    id: 6,
    movie_title: "What's Love Got to Do with It?",
    year: 1997,
  },
  {
    id: 7,
    movie_title: "Unlikely Weapon, An",
    year: 1988,
  },
  {
    id: 8,
    movie_title: "Death of a President",
    year: 2009,
  },
  {
    id: 9,
    movie_title: "Honky Tonk Freeway",
    year: 2005,
  },
  {
    id: 10,
    movie_title: "Rally On! (Ralliraita)",
    year: 2012,
  },
  {
    id: 11,
    movie_title: "Stir Crazy",
    year: 1994,
  },
  {
    id: 12,
    movie_title: "My One and Only",
    year: 1996,
  },
  {
    id: 13,
    movie_title: "Run for Cover",
    year: 2007,
  },
  {
    id: 14,
    movie_title: "Kung Phooey!",
    year: 2002,
  },
  {
    id: 15,
    movie_title: "Transylvania",
    year: 2007,
  },
  {
    id: 16,
    movie_title: "Neil Young Journeys",
    year: 2009,
  },
  {
    id: 17,
    movie_title: "Jekyll",
    year: 2005,
  },
  {
    id: 18,
    movie_title: "Death of a President",
    year: 2008,
  },
  {
    id: 19,
    movie_title: "Funny Games",
    year: 2002,
  },
  {
    id: 20,
    movie_title: "Amelia",
    year: 2008,
  },
  {
    id: 21,
    movie_title: "Gangs of New York",
    year: 2001,
  },
  {
    id: 22,
    movie_title: "Pay It Forward",
    year: 2009,
  },
  {
    id: 23,
    movie_title: "Do You Like Hitchcock? (Ti piace Hitchcock?)",
    year: 2005,
  },
  {
    id: 24,
    movie_title: "Rolling Family (Familia rodante)",
    year: 1991,
  },
  {
    id: 25,
    movie_title: "Prata Palomares",
    year: 2004,
  },
  {
    id: 26,
    movie_title: "Westward the Women",
    year: 2003,
  },
  {
    id: 27,
    movie_title: "Screaming Skull, The",
    year: 1989,
  },
  {
    id: 28,
    movie_title: "Tell Me and I Will Forget",
    year: 1997,
  },
  {
    id: 29,
    movie_title: "Safety Patrol",
    year: 2004,
  },
  {
    id: 30,
    movie_title: "Gold Raiders",
    year: 1996,
  },
  {
    id: 31,
    movie_title: "Ready to Rumble",
    year: 2002,
  },
  {
    id: 32,
    movie_title: "Square, The (Al Midan)",
    year: 2011,
  },
  {
    id: 33,
    movie_title:
      "Henri-Georges Clouzot's Inferno (L'enfer d'Henri-Georges Clouzot)",
    year: 2009,
  },
  {
    id: 34,
    movie_title: "Opposite Day",
    year: 2000,
  },
  {
    id: 35,
    movie_title: "Beach, The",
    year: 2008,
  },
  {
    id: 36,
    movie_title: "Direct from Brooklyn",
    year: 2003,
  },
  {
    id: 37,
    movie_title: "Charlotte Sometimes",
    year: 2010,
  },
  {
    id: 38,
    movie_title: "Simon Killer ",
    year: 1995,
  },
  {
    id: 39,
    movie_title: "Matilda",
    year: 2012,
  },
  {
    id: 40,
    movie_title: "Message to Love: The Isle of Wight Festival",
    year: 1992,
  },
  {
    id: 41,
    movie_title: "My Future Boyfriend",
    year: 2010,
  },
  {
    id: 42,
    movie_title: "Legend of Sleepy Hollow, The",
    year: 2003,
  },
  {
    id: 43,
    movie_title: "Good Advice",
    year: 1992,
  },
  {
    id: 44,
    movie_title: "Gigot",
    year: 2003,
  },
  {
    id: 45,
    movie_title: "Venom",
    year: 1984,
  },
  {
    id: 46,
    movie_title: "Coffee Town",
    year: 2012,
  },
  {
    id: 47,
    movie_title: "Idiot Returns, The (Návrat idiota)",
    year: 2005,
  },
  {
    id: 48,
    movie_title: "Odette Toulemonde",
    year: 2006,
  },
  {
    id: 49,
    movie_title: "Star!",
    year: 2004,
  },
  {
    id: 50,
    movie_title: "Time Machine, The",
    year: 2009,
  },
];

export const getMovies = (req, res) => {
  res.send(movies);
};

export const getMovie = (req, res) => {
  const { id } = req.params;
  const foundMovie = movies.find((movie) => movie.id === parseInt(id));
  if (id > 50 || id < 1) res.send(`Movie with an id of ${id} not found`);
  else res.send(foundMovie);
};

export const addMovie = (req, res) => {
  const { movie_title, year } = req.body;
  movies.push({ movie_title, year, id: movies.length + 1 });
  res.json(
    `The movie with a title of ${movie_title} which was released in ${year} was added.`
  );
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const foundMovie = movies.find((movie) => movie.id === parseInt(id));
  movies = movies.filter((movie) => movie.id !== parseInt(id));
  res.json(
    `The film with a title of ${foundMovie.movie_title} was removed in the fake database.`
  );
};

export const editMovie = (req, res) => {
  const { id } = req.params;
  const { id: movieId, movie_title, year } = req.body;
  const foundMovie = movies.find((movie) => movie.id === parseInt(id));
  if (movie_title) foundMovie.movie_title = movie_title;
  if (year) foundMovie.year = year;
  res.json(foundMovie);
};
