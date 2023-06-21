import { useState } from 'react';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const trimQuery = query.trim();
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
