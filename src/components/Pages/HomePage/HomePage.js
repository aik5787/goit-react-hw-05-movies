import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMoviesContext } from '../../Context/Context';
import {
  ListContainer,
  HomePageTitle,
  HomePageList,
  StyledNavLink,
} from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();
  const { movies, getTrendingMovies } = useMoviesContext();
  // console.log('location Home:>>', location);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <ListContainer>
      <HomePageTitle>Trending today</HomePageTitle>
      <HomePageList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledNavLink to={`/movies/${movie.id}`} state={location}>
              {movie.name || movie.title}
            </StyledNavLink>
          </li>
        ))}
      </HomePageList>
    </ListContainer>
  );
};
export default HomePage;
