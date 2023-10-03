import { Headercontainer, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <Headercontainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Headercontainer>
  );
};
export default Header;
