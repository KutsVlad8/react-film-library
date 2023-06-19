import { getMovieReviews } from 'components/servise/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews.results);
        console.log(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <ListReviews>
        {movieReviews.map(review => (
          <li key={review.id}>
            <p>
              <b>Author:</b>
              {review.author}
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ListReviews>
    </>
  );
};

export default Reviews;
