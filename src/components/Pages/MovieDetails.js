import { useEffect } from 'react';
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMoviesContext } from '../Context/Context';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location MoviesDetails:>>', location.state);

  const { getMovieDetails, movieDetails } = useMoviesContext();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => {
        if (!response) {
          navigate('/', { replace: true });
        }
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId, navigate, getMovieDetails]);

  return (
    <div>
      <Link to={location.state}>Go Back</Link>
      {Object.keys(movieDetails).length > 0 ? (
        <>
          <h2>{movieDetails.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="Movie Poster"
          />
          <p>User Score: {movieDetails.vote_average}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>
            Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <h3>Additional information</h3>
      <NavLink to={`/movies/${movieId}/cast`} state={location}>
        Cast
      </NavLink>
      <NavLink to={`/movies/${movieId}/reviews`} state={location}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
