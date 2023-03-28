import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { availability } from "../utils/api/books";
import { deleteBook } from "../utils/api/books";
import { NavLink } from "react-router-dom";

function Book({ book }) {
  console.log("book", book);
  const queryClient = useQueryClient();
  const updateBook = useMutation(() => availability(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });
  const deleteBooks = useMutation(() => deleteBook(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const handleClick = () => {
    console.log("Available button clicked!");
    updateBook.mutate(book.available);
  };
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${book.name} permanently?`
      )
    ) {
      deleteBooks.mutate();
    }
  };
  return (
    <div class="book">
      <div class="bookcover">
        <NavLink to={`/detail/${book.id}`}>
          <img className="image" src={book.image} alt={book.name} />
        </NavLink>
      </div>
      <div className="content">
        <h3>{book.name}</h3>
        {/* <h3>Borrowed</h3> */}
        {book.available ? (
          <button type="button" onClick={handleClick}>
            Available
          </button>
        ) : (
          <p>Not Available</p>
        )}
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Book;
