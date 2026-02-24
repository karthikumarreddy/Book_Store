import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  height: 13rem;
  width: 27rem;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 1001;
  border-radius: 1rem;
  padding: 1rem;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.surface};
  width: 7rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const Cover = styled.div`
  text-align: end;
  padding: 1rem;
`;
