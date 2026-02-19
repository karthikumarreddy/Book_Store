import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.colors.shadow};
  background-color: white;
  height: 4rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Navcontainer = styled.div`
  padding-top: 1rem;
  padding-left: 3rem;
  display: flex;
  height: 4rem;
  gap: 0.5rem;
`;

export const Link1 = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  height: 2.4rem;
`;
export const Bookname = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent};
`;
export const Links = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 20px;
  padding-right: 3rem;
  font-weight: 500;
  font-size: 1rem;

  @media (max-width: 700px) {
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transform: translateY(${({ $open }) => ($open ? "0" : "-10px")});
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background: whitesmoke;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    z-index: 10;
  }
`;

export const Link2 = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem;
  color: black;
  display: ${({ $open }) => ($open ? "none" : "block")};

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
    color: ${(props) => props.theme.colors.accent};
  }
  &.active {
    color: ${(props) => props.theme.colors.accent};
    border-bottom: ${(props) => props.theme.colors.primaryLight} 2px solid;
  }
`;

export const Menu = styled.button`
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-right: 1rem;

  @media (max-width: 700px) {
    display: block;
  }
`;
