import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Routes>
    </div>
  );
};

export default App;
