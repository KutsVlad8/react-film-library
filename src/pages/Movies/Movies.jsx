import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { getSearchMovie } from 'components/servise/Api';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmitForm = newQuery => {
    if (newQuery === searchQuery) {
      Notiflix.Notify.info(`Фильмы по запросу  ${newQuery} уже отображались.`);
      return;
    }

    setSearchQuery(newQuery);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetch() {
      try {
        const movies = await getSearchMovie(searchQuery);
        console.log(movies.results);
        setSearchMovies([...movies.results]);
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
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
