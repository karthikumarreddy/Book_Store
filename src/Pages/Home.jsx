import React from "react";
import { Layout } from "../Components/Layout";
import {
  Heading1,
  Heading2,
  ListItem,
  Para,
  UnorderedList,
} from "../styles/Home.styles";
import { ProductCard } from "../Components/ProductCard";
import { books } from "../data/books";
import { GridLayout } from "../styles/ProductCard.styles";

function Home() {
  const book = books.slice(0, 6);
  return (
    <div>
      <Layout>
        <Heading1>Online Book Purchasing Platform</Heading1>
        <Para>
          This platform provides a structured environment for browsing and
          purchasing books across multiple genres. The focus is
          <br /> on clarity, predictable navigation, and a distraction-free user
          experience.
        </Para>
        <Para>
          Books are organized by category and price, allowing users to evaluate
          available options efficiently and make informed <br /> purchasing
          decisions.
        </Para>

        <Heading2>How the Platform Works</Heading2>

        <UnorderedList>
          <ListItem>Browse books by genre</ListItem>
          <ListItem>Search and filter using multiple criteria</ListItem>
          <ListItem>View detailed information on dedicated pages</ListItem>
          <ListItem>Add books to a globally managed cart</ListItem>
        </UnorderedList>
        <Heading2>Featured Books</Heading2>
        <GridLayout>
          {!book || book.length == 0 ? (
            <h1>Book list is empty</h1>
          ) : (
            book.map((b) => <ProductCard key={b.id} props={b} />)
          )}
        </GridLayout>
      </Layout>
    </div>
  );
}

export { Home };
