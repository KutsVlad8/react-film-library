import { getMovieReviews } from 'components/servise/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews, Content, AuthorName, Span } from './Reviews.styled';

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
  }, [movieId]);

  return (
    <>
      {movieReviews.length === 0 ? (
        <Content>Sorry, we didn't find any reviews about this movie</Content>
      ) : (
        <ListReviews>
          {movieReviews.map(review => (
            <li key={review.id}>
              <AuthorName>
                Author: <Span> {review.author}</Span>
              </AuthorName>

              <Content>{review.content}</Content>
            </li>
          ))}
        </ListReviews>
      )}
    </>
  );
};

export default Reviews;
