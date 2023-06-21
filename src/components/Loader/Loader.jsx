import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <RotatingLines strokeColor="#2f4f4f" />
  </LoaderContainer>
);
