import { useMoviesContext } from '../../Context/Context';
import { NavLink, useLocation } from 'react-router-dom';

import {
  ListContainer,
  MoviePageList,
  StyledNavLink,
} from './MovieList.styled';

const MoviesList = () => {
  const { movieRequest } = useMoviesContext();
  const location = useLocation();

  return (
    <ListContainer>
      <MoviePageList>
        {movieRequest.map(movie => (
          <li key={movie.id}>
            <StyledNavLink to={`/movies/${movie.id}`} state={location}>
              {movie.name || movie.title}
            </StyledNavLink>
          </li>
        ))}
      </MoviePageList>
    </ListContainer>
  );
};

export default MoviesList;
