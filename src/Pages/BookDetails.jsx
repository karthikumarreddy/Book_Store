import React, { useEffect } from "react";
import { Layout } from "../Components/Layout";
import { books } from "../data/books";
import { booksDescription } from "../data/books";
import { useParams } from "react-router-dom";
import { Button } from "../styles/ProductCard.styles.jsx";
import styled from "styled-components";

const Details = styled.div`
  max-width: 800px;
  margin: 0 auto;
  div {
    display: flex;
    flex-dirction: column;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    font-weight: 100;
  }
`;

const BookDetails = () => {
  const { id } = useParams();
  const bookdata = books.find((data) => id === data.id);
  const description = booksDescription[id];

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Layout>
        <Details>
          <h1>{bookdata.title}</h1>
          <p>
            <b>Author:</b>
            {bookdata.author}
          </p>
          <p>
            <b>Category:</b>
            {bookdata.category}
          </p>
          <p>
            <b>Book Overview</b>
          </p>
          <p>{description}</p>
          <p>
            <b>Who This Book Is For?</b>
          </p>
          <p>
            This book is intended for readers who prefer focused storytelling
            and genre-specific narratives delivered in a structured format.
          </p>
          <hr />
          <div style={{ padding: "10px 0" }}>
            <h2 style={{ margin: 0 }}>₹{bookdata.price}</h2>
            <Button>Add to Cart</Button>
          </div>
        </Details>
      </Layout>
    </>
  );
};

export { BookDetails };
