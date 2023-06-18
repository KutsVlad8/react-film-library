import { Link } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  console.log(trendingMovies);
  return (
    <>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title || movie.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
