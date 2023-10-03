import { useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { useMoviesContext } from '../../Context/Context';

import {
  MoviesContainer,
  MoviesContainerInput,
  MoviesContainerButton,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { getMovieRequest } = useMoviesContext();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchParams({ query: query });
    }
  }, [searchParams, setSearchParams]);

  const handleChange = e => {
    const inputValue = e.target.value;
    if (!inputValue.trim()) {
      setSearchParams({ query: '' });
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  const handleSearch = e => {
    const query = searchParams.get('query');
    getMovieRequest(query);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // console.log('searchParams', searchParams.get('query'));

  return (
    <MoviesContainer>
      <MoviesContainerInput
        type="text"
        placeholder="Enter a movie name"
        value={searchParams.get('query') || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <MoviesContainerButton onClick={handleSearch}>
        Search
      </MoviesContainerButton>
      <Outlet />
    </MoviesContainer>
  );
};

export default Movies;
