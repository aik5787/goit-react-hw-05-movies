import axios from 'axios';

const apiKey = 'b380269491c956fa5bfac5e7d5bf5634';

// fetchTrendingMovies

export async function fetchTrendingMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/trending/all/day';
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });
  try {
    const response = await axios.get(apiUrl, { params });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching trending movies: ${error.message}`);
  }
}

// fetchMovieDetails

export async function fetchMovieDetails(movieId) {
  const apiUrlMovieDetails = `https://api.themoviedb.org/3/movie/${movieId}`;
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });

  try {
    const response = await axios.get(apiUrlMovieDetails, {
      params,
    });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching movie details: ${error.message}`);
  }
}

// fetchMovieCast

export async function fetchMovieCast(movieId) {
  const apiUrlMovieCast = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });

  try {
    const response = await axios.get(apiUrlMovieCast, {
      params,
    });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data.cast;
  } catch (error) {
    throw new Error(`Error fetching movie cast: ${error.message}`);
  }
}

// fetchMovieReviews

export async function fetchMovieReviews(movieId) {
  const apiUrlMovieReviews = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });

  try {
    const response = await axios.get(apiUrlMovieReviews, {
      params,
    });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data.results;
  } catch (error) {
    throw new Error(`Error fetching movie reviews: ${error.message}`);
  }
}

// fetchMovieRequest

export async function fetchMovieRequest(query) {
  const apiUrlMovieRequest = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });

  try {
    const response = await axios.get(apiUrlMovieRequest, {
      params,
    });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data.results;
  } catch (error) {
    throw new Error(`Error fetching movie request: ${error.message}`);
  }
}
