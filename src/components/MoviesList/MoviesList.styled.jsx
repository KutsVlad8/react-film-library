import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  margin-bottom: 5px;

  list-style: none;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 2 * 30px) / 3);
`;

export const ListLinkItem = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

export const Title = styled.h2`
  margin-top: 0px;
  color: darkslategray;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;
