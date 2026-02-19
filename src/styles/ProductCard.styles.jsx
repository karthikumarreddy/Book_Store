import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 27rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-6px);
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductName = styled.h3`
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
`;
export const ProductAuthor = styled.p`
  padding-top: 3px;
  font-size: 16px;
  color: #475569;
  text-align: center;
`;

export const ProductImg = styled.img`
  height: 13rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ProductPrice = styled.h3`
  padding-top: 1rem;
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.surface};
  width: 7rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const DisplayButton = styled.div`
  margin-top: 1rem;
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: center;
  gap: 1rem;
`;

export const Premiun = styled.div`
  height: 1.5rem;
  width: 5rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.surface};
  border-radius: 2rem;
  text-align: center;
  transform: translate(0, -2rem);
  font-size: 0.9rem;
`;
