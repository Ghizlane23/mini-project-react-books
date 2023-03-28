import React from "react";
import { Form, Formik, Field } from "formik";
import { addBook } from "../utils/api/books";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    image: "",
    details: "",
    available: true,
  };
  const onSubmit = async (values, { resetForm }) => {
    await addBook(values);
    console.log(values);
    resetForm(initialValues);
    navigate("/BookList");
    alert("Book added successfully!");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <h2> Name:</h2>
            <Field type="text" name="name" />
          </div>
          <div>
            <h2>Image:</h2>
            <Field type="text" name="image" />
          </div>
          <div>
            <h2>details:</h2>
            <Field type="text" name="details" />
          </div>
          <div>
            <h2>Available:</h2>
            <Field type="checkbox" name="available" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Book
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBook;
