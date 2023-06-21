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
  flex-basis: calc((100% - 4 * 30px) / 5);
`;

export const Name = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  color: darkslategray;
  margin-top: 0;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const Content = styled.p`
  font-family: sans-serif;
  color: darkslategray;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
`;
