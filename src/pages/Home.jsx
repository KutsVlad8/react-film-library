import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getDayTrending } from '../components/servise/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await getDayTrending();
        // console.log(movies.results);
        setTrendingMovies([...movies.results]);
      } catch (error) {}
    }

    fetch();
  }, []);

  // console.log(trendingMovies);
  return (
    <>
      <h1>Trending today </h1>
      <MoviesList trendingMovies={trendingMovies} />
    </>
  );
};

export default Home;
