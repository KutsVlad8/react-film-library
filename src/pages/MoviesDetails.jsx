import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'components/servise/Api';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const { movieInfo, setMovieInfo } = useParams({});
  console.log(movieId);

  useEffect(() => {
    async function fetch() {
      try {
        const movie = await getMovieInfo(movieId);
        console.log(movie.overview);
        setMovieInfo(prevMovie => ({ ...prevMovie, movie }));
      } catch (error) {}
    }

    fetch();
  });
  console.log(movieInfo);
  return (
    <div>
      {/* <img
        src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
        alt=""
      />
      <div>
        <h2>{movieInfo.title || movieInfo.name}</h2>
        <p>{movieInfo.overview}</p>
      </div> */}
    </div>
  );
};

export default MoviesDetails;
