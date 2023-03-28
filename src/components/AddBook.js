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
    <div className="form-container">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, values }) => (
          <Form>
            <div className="form-group">
              <label className="form-label"> Name:</label>
              <Field type="text" name="name" className="form-control" />
            </div>

            <div className="form-group">
              <label className="form-label">Image:</label>
              <Field type="text" name="image" className="form-control" />
            </div>

            <div className="form-group">
              <label className="form-label">details:</label>
              <Field type="text" name="details" className="form-control" />
            </div>

            <div className="form-group">
              <h2>Available:</h2>
              <Field
                type="checkbox"
                name="available"
                checked={values.available}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBook;
