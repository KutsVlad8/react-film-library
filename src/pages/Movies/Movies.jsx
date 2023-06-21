import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovie } from 'components/servise/Api';
import { Content } from './Movies.styled';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  const handleSubmitForm = newQuery => {
    if (newQuery === '') {
      Notiflix.Notify.failure('The input field is blank');
      return;
    } else if (newQuery === searchQuery) {
      Notiflix.Notify.info(
        `Movies on demand ${newQuery} are already displayed`
      );
      return;
    }

    setSearchParams({ search: newQuery });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetch() {
      try {
        const movies = await getSearchMovie(searchQuery);
        console.log(movies);
        setSearchMovies([...movies.results]);
        setTotalMovies(movies.total_results);
      } catch (error) {
        // setError(error.message);
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }

    fetch();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={handleSubmitForm}></SearchBar>

      {totalMovies === 0 && (
        <>
          <Content>Nothing was found for your search {searchMovies}</Content>
        </>
      )}

      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
