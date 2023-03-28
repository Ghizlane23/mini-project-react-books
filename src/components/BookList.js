import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import { list } from "../utils/api/books";
import Book from "./Book";
import { NavLink } from "react-router-dom";

export default function () {
  const [query, setQuery] = useState("");

  const res = useQuery(["books"], list);
  console.log(res.data?.data);
  const books = res.data?.data
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => {
      return <Book key={book.id} book={book} />;
    });

  console.log("HELLLO", books);
  return (
    <section>
      <div>
        <h2>Explore our Books</h2>
        <br />
        <SearchBar setQuery={setQuery} />
        {/* <div>
          <NavLink to="/add"> Add New Book</NavLink>
        </div> */}
      </div>
      <div>{books}</div>
    </section>
  );
}
