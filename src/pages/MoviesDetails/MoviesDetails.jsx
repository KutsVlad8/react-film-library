import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieInfo } from 'components/servise/Api';
import {
  Card,
  CardContent,
  GenresList,
  InfoList,
  InfoListItem,
  InfoListItemLink,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

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
  console.log(genres);

  return (
    <>
      <Card>
        <img
          src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
          alt="{movieInfo.title || movieInfo.name}"
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
