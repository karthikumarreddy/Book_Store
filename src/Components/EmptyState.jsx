import styled from "styled-components";

function EmptyState({ heading, content }) {
  const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  return (
    <Container>
      <div>
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </Container>
  );
}
export { EmptyState };
