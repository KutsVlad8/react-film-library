import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import Header from './Header/Header';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
