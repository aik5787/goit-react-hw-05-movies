import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesContext } from '../Context/Context';

const Cast = () => {
  const { movieId } = useParams();
  const { getMovieCast, movieCast } = useMoviesContext();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId, getMovieCast]);

  console.log(movieCast);

  return (
    <div>
      <ul>
        {movieCast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
