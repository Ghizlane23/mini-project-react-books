import axios from "axios";

export function list() {
  return axios.get("https://mini-project-react-books.herokuapp.com/books");
}
export function availability(id) {
  return axios.put(
    `https://mini-project-react-books.herokuapp.com/book/${id}`,
    { available: false }
  );
}
export function addBook(values) {
  return axios.post(
    "https://mini-project-react-books.herokuapp.com/books",
    values
  );
}
export function deleteBook(id) {
  return axios.delete(
    `https://mini-project-react-books.herokuapp.com/books/${id}`
  );
}
export function detail(id) {
  return axios.get(`https://mini-project-react-books.herokuapp.com/book/${id}`);
}
