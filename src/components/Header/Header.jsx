import { Head, Navigation, NavigationItem } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/movies">Movies</NavigationItem>
      </Navigation>
    </Head>
  );
};

export default Header;
