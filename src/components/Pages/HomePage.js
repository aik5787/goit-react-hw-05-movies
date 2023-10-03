import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useMoviesContext } from '../Context/Context';

const HomePage = () => {
  const location = useLocation();
  const { movies, getTrendingMovies } = useMoviesContext();
  // console.log('location Home:>>', location);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.name || movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
