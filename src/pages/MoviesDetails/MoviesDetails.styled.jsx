import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  padding: 15px;
`;

export const CardContent = styled.div`
  margin-left: 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const InfoListItem = styled.li``;

export const Img = styled.img`
  width: 300px;
`;

export const InfoListItemLink = styled(Link)`
  text-decoration: none;
  font-family: sans-serif;
  color: darkslategray;
  font-size: 18px;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  height: 20px;
  text-decoration: none;
  border: 1px solid darkslategray;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  width: 45px;
  text-align: center;
  margin-top: 10px;
  margin-left: 15px;

  &:hover,
  &:focus {
    background-color: darkslategray;
    color: white;
  }
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieName = styled.h2`
  font-family: sans-serif;
  color: darkslategray;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const Title = styled.h3`
  font-family: sans-serif;
  color: darkslategray;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const Content = styled.p`
  font-family: sans-serif;
  color: darkslategray;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;
