import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './Context/Context';
import HomePage from './Pages/HomePage';
import Layout from './Layout/Layout';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import Cast from './Pages/Cast';
import Reviews from './Pages/Reviews';
import MovieList from './Pages/MoviesList';

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
