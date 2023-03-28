import "./App.css";
import BookList from "./components/BookList";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import BookDetail from "./components/BookDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/BookList"} element={<BookList />} />
        <Route path={"/add"} element={<AddBook />} />
        <Route path={"/detail/:id"} element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
