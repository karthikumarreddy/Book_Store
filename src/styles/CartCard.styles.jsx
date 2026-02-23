import styled from "styled-components";

export const Card = styled.div`
  height: 9rem;
  width: 70%;

  display: flex;
  border-radius: 1rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-top: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    height: 14rem;
  }
`;

export const Image = styled.img`
  height: 7rem;
  width: 5rem;
  background-color: black;
  // margin: 1rem;
  border-radius: 0.5rem;
`;

export const Heading3 = styled.h3`
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Display2 = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.surface};
  width: 7rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
  @media (max-width: 650px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
