import { useEffect, useState, useRef, Suspense } from 'react';

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
  BackLink,
  MovieName,
  Title,
  Content,
} from './MoviesDetails.styled';
import { Loader } from 'components/Loader/Loader';
import img from '../../images/noFoto.jpg';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

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

  console.log(movieInfo);

  return (
    <>
      <BackLink to={backLocation.current}>Back </BackLink>
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
          <MovieName>{movieInfo.title || movieInfo.name}</MovieName>
          <Title>Release</Title>
          <Content> {movieInfo.release_date}</Content>
          <Title>Overview</Title>
          <Content> {movieInfo.overview}</Content>

          <Title>Genres</Title>
          <GenresList>
            {genres ? (
              genres.map(genre => (
                <li key={genre.id}>
                  <Content>{genre.name}</Content>
                </li>
              ))
            ) : (
              <p>no genres</p>
            )}
          </GenresList>
          <Title>Runtime</Title>
          <Content> {movieInfo.runtime} min</Content>
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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
