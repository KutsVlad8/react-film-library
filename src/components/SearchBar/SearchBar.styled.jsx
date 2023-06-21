import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;

  margin-right: 10px;
  font: inherit;
  font-size: 20px;

  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: darkslategray;

  border: 1px solid darkslategray;
  border-radius: 3px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;

  height: 28px;

  background-color: white;
  color: darkslategray;
  border: 1px solid darkslategray;
  border-radius: 3px;

  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: darkslategray;
    color: white;
  }
`;
