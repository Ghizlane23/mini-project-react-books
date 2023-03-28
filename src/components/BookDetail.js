import React from "react";
import { useQuery } from "@tanstack/react-query";
import { detail } from "../utils/api/books";
import { useParams } from "react-router-dom";

function BookDetail() {
  const id = useParams().id;
  const res = useQuery(["book"], () => detail(id));
  const book = res.data?.data;
  return (
    <div>
      <h1>Book Description</h1>

      <h2>{book?.name}</h2>
      <br />
      <p>{book?.details}</p>
    </div>
  );
}

export default BookDetail;
