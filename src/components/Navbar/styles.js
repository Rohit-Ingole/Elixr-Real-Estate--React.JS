import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

import Bars from "../../images/bars.svg";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#f90" : "transparent")};
  height: ${({ scrollNav }) => (scrollNav ? "60px" : "80px")};
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: 0.8s all ease-in-out;
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 24px;
`;

export const Menubars = styled.i`
  display: none;
  background-image: url(${Bars});
  background-size: contain;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 25%);
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
