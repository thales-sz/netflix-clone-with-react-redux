export const API_KEY = '2f310a6cb91587422a0050c125e5ff72';

const categories = [
  {
    name: 'trending',
    title: 'Em alta',
    path: `/trending/all/week?api_key${API_KEY}&language=pt-BR`,
  },
  {
    name: 'netflixOriginals',
    title: 'Originais Netflix',
    path: `/discover/tv?api_key${API_KEY}&with_networks=213`,
  },
  {
    name: 'topRated',
    title: 'Populares',
    path: `/movie/top_rated?api_key${API_KEY}&language=pt-BR`,
  },
  {
    name: 'comedy',
    title: 'Comédia',
    path: `/discover/tv?api_key${API_KEY}&with_genres=35`,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/discover/tv?api_key${API_KEY}&with_genres=10749`,
  },
  {
    name: 'documentaries',
    title: 'Documenatários',
    path: `/discover/tv?api_key${API_KEY}&with_genres=99`,
  },
];

export const getMovies = async (path) => {
  try {
    const URL = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.log("erro getMovies", error);
  }
}
