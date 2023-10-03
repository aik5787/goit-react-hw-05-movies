import React, { useContext, useState } from 'react';
import {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieRequest,
} from '../Api/Api';
import Notiflix from 'notiflix';

const MoviesContext = React.createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

// Conext Component

export function Context({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieRequest, setMovieRequest] = useState([]);

  // Request Trend Movies

  const getTrendingMovies = async () => {
    try {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
      // console.log(data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    } finally {
    }
  };

  // Request  Movie details

  const getMovieDetails = async movieId => {
    try {
      const dataMovieDetail = await fetchMovieDetails(movieId);
      if (dataMovieDetail.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no moviess matching your search query. Please try again.'
        );
        return;
      }
      setMovieDetails(dataMovieDetail);

      return true;
      // console.log(movieDetails);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return false;
    }
  };

  // Request  Cast

  const getMovieCast = async movieId => {
    try {
      const dataMovieCast = await fetchMovieCast(movieId);
      setMovieCast(dataMovieCast);
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  };

  // Request  Reviews

  const getMovieReviews = async movieId => {
    try {
      const dataMovieReviews = await fetchMovieReviews(movieId);
      setMovieReviews(dataMovieReviews);
      // console.log(dataMovieReviews);
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
    }
  };

  // User Request

  const getMovieRequest = async query => {
    try {
      const dataMovieRequest = await fetchMovieRequest(query);
      setMovieRequest(dataMovieRequest);
      // console.log(movieRequest);
    } catch (error) {
      console.error('Error fetching movie request:', error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        movieDetails: movieDetails,
        setMovies: setMovies,
        movieCast: movieCast,
        movieReviews: movieReviews,
        movieRequest: movieRequest,
        getTrendingMovies: getTrendingMovies,
        getMovieDetails: getMovieDetails,
        getMovieCast: getMovieCast,
        getMovieReviews: getMovieReviews,
        getMovieRequest: getMovieRequest,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
