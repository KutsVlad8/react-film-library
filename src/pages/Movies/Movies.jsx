import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovie } from 'components/servise/Api';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  const handleSubmitForm = newQuery => {
    if (newQuery === '') {
      Notiflix.Notify.failure('Поле ввода пустое');
      return;
    } else if (newQuery === searchQuery) {
      Notiflix.Notify.info(`Фильмы по запросу  ${newQuery} уже отображались.`);
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
          <p>По вашему запросу {searchMovies} ни чего не найдено</p>
        </>
      )}

      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
