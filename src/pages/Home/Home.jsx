import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getDayTrending } from '../../components/servise/Api';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const movies = await getDayTrending();
        setTrendingMovies([...movies.results]);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, []);

  return (
    <>
      <Title>Trending today </Title>
      <MoviesList trendingMovies={trendingMovies} />
    </>
  );
};

export default Home;
