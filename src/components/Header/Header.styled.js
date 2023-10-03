import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Headercontainer = styled.div`
  background-color: white;
  padding: 20px;
  color: white;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &:hover {
    color: #007bff;
  }

  &.active {
    font-weight: bold;
    color: #ff5722;
  }
`;
