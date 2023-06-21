import { useState } from 'react';
import Notiflix from 'notiflix';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const trimQuery = query.trim();

    if (trimQuery === '') {
      Notiflix.Notify.failure('Поле ввода пустое');
      return;
    }

    onSubmit(trimQuery.toLowerCase());

    setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          name="query"
          type="text"
          value={query}
          onChange={changeInput}
          placeholder="Search movie"
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};

export default SearchBar;
