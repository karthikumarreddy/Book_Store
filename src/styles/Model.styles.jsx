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
