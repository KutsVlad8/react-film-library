import styled from '@emotion/styled';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  margin-bottom: 0;

  list-style: none;
`;

export const ListCastItem = styled.li`
  flex-basis: calc((100% - 2 * 30px) / 3);
`;

export const Img = styled.img`
  width: 100%;
`;
