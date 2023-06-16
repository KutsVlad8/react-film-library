import { Link } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  console.log(trendingMovies);
  return (
    <>
      {trendingMovies.map(movie => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <li key={movie.id}>
              <h2>{movie.title || movie.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=""
              />
            </li>
          </Link>
        </ul>
      ))}
    </>
  );
};

export default MoviesList;
