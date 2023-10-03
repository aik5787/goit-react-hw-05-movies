import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './Context/Context';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'));
const MovieList = lazy(() => import('./Pages/MoviesList/MoviesList'));

const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<MovieList />}></Route>
          </Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Context>
  );
};

export default App;
