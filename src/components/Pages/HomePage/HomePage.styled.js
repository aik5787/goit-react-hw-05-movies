import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListContainer = styled.div`
  padding-left: 20px;
`;
export const HomePageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const HomePageList = styled.ul`
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  font-size: 18px;

  &:hover {
    color: #007bff;
  }
`;
