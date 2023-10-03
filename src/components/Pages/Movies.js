import { useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { useMoviesContext } from '../Context/Context';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { movieRequest, getMovieRequest } = useMoviesContext();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchParams({ query: query });
    }
  }, [searchParams]);

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

  // console.log('searchParams', searchParams.get('query'));

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a keyword"
        value={searchParams.get('query') || ''}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <Outlet />
    </div>
  );
};

export default Movies;
