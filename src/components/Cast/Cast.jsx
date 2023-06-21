import { getMovieCast } from 'components/servise/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Img, ListCast, ListCastItem, Name } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const cast = await getMovieCast(movieId);
        setMovieCast(cast.cast);
        console.log(cast.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <>
      <ListCast>
        {movieCast.map(actor => (
          <ListCastItem key={actor.cast_id}>
            <Name>{actor.name}</Name>
            <Img
              // src="../images/noFoto.jpg"
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
            />
          </ListCastItem>
        ))}
      </ListCast>
    </>
  );
};

export default Cast;
