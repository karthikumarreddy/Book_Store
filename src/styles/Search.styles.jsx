import styled from "styled-components";

export const SearchBar = styled.input`
  padding: 1rem;
  width: 25rem;
  height: 2.5rem;

  &:focus {
    outline: none;
    border: 2px solid black;
  }
`;

export const Dropdown = styled.select`
  padding: 0.8rem;
  font-size: 0.9rem;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.surface};
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
