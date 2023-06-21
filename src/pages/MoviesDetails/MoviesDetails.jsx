import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { getMovieInfo } from 'components/servise/Api';
import {
  Card,
  CardContent,
  GenresList,
  InfoList,
  InfoListItem,
  InfoListItemLink,
  Img,
} from './MoviesDetails.styled';
import img from '../../images/noFoto.jpg';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  console.log(location);
  console.log(backLocation);

  useEffect(() => {
    const fetch = async () => {
      try {
        const movie = await getMovieInfo(movieId);

        setMovieInfo(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [movieId]);

  const genres = movieInfo.genres;

  return (
    <>
      <Link to={backLocation.current}>Back </Link>
      <Card>
        <Img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : img
          }
          alt={movieInfo.title || movieInfo.name}
        />
        <CardContent>
          <h2>{movieInfo.title || movieInfo.name}</h2>
          <h3>Overview</h3>
          <p> {movieInfo.overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres ? (
              genres.map(genre => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))
            ) : (
              <p>no genres</p>
            )}
          </GenresList>
        </CardContent>
      </Card>
      <InfoList>
        <InfoListItem>
          <InfoListItemLink to="cast">Cast</InfoListItemLink>
        </InfoListItem>
        <InfoListItem>
          <InfoListItemLink to="reviews">Rewies</InfoListItemLink>
        </InfoListItem>
      </InfoList>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
