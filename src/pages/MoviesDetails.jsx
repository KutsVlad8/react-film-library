import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieInfo } from 'components/servise/Api';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    if (movieInfo === {}) {
      return;
    }
    const fetch = async () => {
      try {
        const movie = await getMovieInfo(movieId);

        setMovieInfo(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  console.log(movieInfo);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt="{movieInfo.title || movieInfo.name}"
      />
      <div>
        <h2>{movieInfo.title || movieInfo.name}</h2>
        <p>{movieInfo.overview}</p>
        {/* {movieInfo.genres.map(genre => console.log(genre))} */}
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Rewies</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
