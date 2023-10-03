import { useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useMoviesContext } from '../../Context/Context';

import {
  StyledLink,
  MovieDetailsContainer,
  MovieDetailsImg,
  MovieInfoContainer,
  MovieInfoTitle,
  MovieInfo,
  MovieAddInfoContainer,
  MovieAddInfo,
  StyledNavLink,
  MovieDetailsMainContainer,
  MovieInfoSpan,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('location MoviesDetails:>>', location.state);

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
    <MovieDetailsMainContainer>
      <StyledLink to={location.state}>Go Back</StyledLink>
      {Object.keys(movieDetails).length > 0 ? (
        <MovieDetailsContainer>
          <MovieDetailsImg
            src={
              movieDetails.profile_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
            }
            alt="Movie Poster"
            width={300}
            height={400}
          />
          <MovieInfoContainer>
            <MovieInfoTitle>{movieDetails.title}</MovieInfoTitle>
            <MovieInfo>
              <MovieInfoSpan>User Score: </MovieInfoSpan>
              {movieDetails.vote_average.toFixed(2)}
            </MovieInfo>
            <MovieInfo>
              <MovieInfoSpan>Overview: </MovieInfoSpan>
              {movieDetails.overview}
            </MovieInfo>
            <MovieInfo>
              <MovieInfoSpan>Genres: </MovieInfoSpan>
              {movieDetails.genres.map(genre => genre.name).join(', ')}
            </MovieInfo>
          </MovieInfoContainer>
        </MovieDetailsContainer>
      ) : (
        <p>Loading...</p>
      )}
      <MovieAddInfoContainer>
        <MovieAddInfo>Additional information</MovieAddInfo>
        <StyledNavLink to={`/movies/${movieId}/cast`} state={location}>
          Cast
        </StyledNavLink>
        <StyledNavLink to={`/movies/${movieId}/reviews`} state={location}>
          Reviews
        </StyledNavLink>
      </MovieAddInfoContainer>
      <Outlet />
    </MovieDetailsMainContainer>
  );
};

export default MoviesDetails;
