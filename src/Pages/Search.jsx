import React, { useEffect, useMemo, useRef, useState } from "react";

import { Layout } from "../Components/Layout";
import { books } from "../data/books";
import { ProductCard } from "../Components/ProductCard";
import { GridLayout } from "../styles/ProductCard.styles";
import { SearchBar } from "../styles/Search.styles";
function Search() {
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [range, setRange] = useState(1000);
  const [category, setCategory] = useState("All");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const handleRange = (event) => {
    setRange(Number(event.target.value));
  };
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchText =
        book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        book.author.toLowerCase().includes(searchValue.toLowerCase());
      const matchCategory = category === "All" || book.category === category;
      const matchPrice = book.price <= range;
      return matchText && matchCategory && matchPrice;
    });
  }, [searchValue, range, category]);

  return (
    <div>
      <Layout>
        <h1>Search and Filter Books</h1>
        <p>
          This page enables users to search books using title, author name,
          category selection, and price range filters. Multiple <br /> filters
          can be applied simultaneously to refine results.
        </p>
        <p>
          Results update dynamically as filter values change, allowing users to
          identify relevant books without reloading or <br />
          navigating away.
        </p>
        <SearchBar
          type="text"
          placeholder="Search by title or author"
          ref={searchRef}
          onChange={handleSearch}
        />
        <select value={category} onChange={handleCategory}>
          <option value="All">All category</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Mystery">Mystery</option>
        </select>
        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={range}
          onChange={handleRange}
        />
        <span>Up to{range}</span>
        <GridLayout>
          {!filteredBooks || filteredBooks.length == 0 ? (
            <h1>Book list is empty</h1>
          ) : (
            filteredBooks.map((b) => <ProductCard key={b.id} props={b} />)
          )}
        </GridLayout>
      </Layout>
    </div>
  );
}

export { Search };
