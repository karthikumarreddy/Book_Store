import styled from "styled-components";

export const Options = styled.p`
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.surface}; 
`;

export const Description = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.surface};
  width: 50rem;
`;
