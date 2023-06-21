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
  color: darkslategray;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
`;
