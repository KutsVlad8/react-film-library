import { List, ListItem, ListLinkItem, Title, Img } from './MoviesList.styled';
import img from '../../images/noFoto.jpg';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <ListLinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
              <Title>{movie.title || movie.name}</Title>
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : img
                }
                alt={movie.title || movie.name}
              />
            </ListLinkItem>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MoviesList;
