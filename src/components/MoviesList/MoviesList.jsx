// import { Link } from 'react-router-dom';
import { List, ListItem, ListLinkItem, Title, Img } from './MoviesList.styled';
import img from '../../images/noFoto.jpg';

const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <ListLinkItem to={`/movies/${movie.id}`}>
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
