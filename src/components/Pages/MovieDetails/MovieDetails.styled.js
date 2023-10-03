import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsMainContainer = styled.div`
  padding-top: 20px;
`;
export const StyledLink = styled(Link)`
  padding: 10px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const MovieDetailsImg = styled.img`
  width: 300px;
  height: 400px;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const MovieInfoTitle = styled.h2`
  font-size: 24px;
`;

export const MovieInfo = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MovieInfoSpan = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const MovieAddInfoContainer = styled.div`
  padding: 20px 20px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1), 0 -6px 8px rgba(0, 0, 0, 0.1);
`;
export const MovieAddInfo = styled.h3`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  margin-right: 115px;

  &:hover {
    color: #333;
  }

  &.active {
    font-weight: bold;
  }
`;
