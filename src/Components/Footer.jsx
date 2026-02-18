import React from "react";
import styled from "styled-components";

const Footeerstyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.surface};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;
const date = new Date();
function Footer() {
  return (
    <Footeerstyle>
      © {date.getFullYear()} BookStore — All rights reserved.
    </Footeerstyle>
  );
}

export { Footer };
