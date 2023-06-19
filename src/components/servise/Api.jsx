import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '048dfb7517a31fb5a77ea118ba208738';

// Отримує параметр поточної сторінки та повертає промікс фільмів що були в тренді протягом дня
export async function getDayTrending(page = 1) {
  const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує параметр поточного фільму
export async function getMovieInfo(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує актерський состав фільму
export async function getMovieCast(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

// Отримує актерський состав фільму
export async function getMovieReviews(movie_id) {
  const url = `${MAIN_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
