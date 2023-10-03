import { useMoviesContext } from '../Context/Context';
import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = () => {
  const { movieRequest } = useMoviesContext();
  const location = useLocation();

  return (
    <div>
      <ul>
        {movieRequest.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.name || movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
