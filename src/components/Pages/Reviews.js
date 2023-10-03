import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesContext } from '../Context/Context';

const Reviews = () => {
  const { movieId } = useParams();
  const { getMovieReviews, movieReviews } = useMoviesContext();

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  console.log(movieReviews);

  return (
    <div>
      <h2>Reviews</h2>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
