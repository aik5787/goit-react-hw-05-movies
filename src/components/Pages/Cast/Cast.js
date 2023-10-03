import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesContext } from '../../Context/Context';

import { CastList, CastImg, CastInfo } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const { getMovieCast, movieCast } = useMoviesContext();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  // console.log(movieCast);

  return (
    <div>
      <CastList>
        {movieCast.map(actor => (
          <li key={actor.id}>
            <CastImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
              }
              alt={actor.name}
              width={300}
              height={400}
            />
            <CastInfo>{actor.name}</CastInfo>
            <CastInfo>Character: {actor.character}</CastInfo>
          </li>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
