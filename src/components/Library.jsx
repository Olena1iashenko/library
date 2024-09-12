import { useDispatch } from "react-redux";
import {
  deleteBookThunk,
  editBookThunk,
  fetchAllBooksThunk,
} from "../../redux/operations";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const Library = ({ books, setBooks }) => {
  const dispatch = useDispatch();
  // const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const handleDelete = (isbn) => {
    dispatch(deleteBookThunk({ isbn }));
  };

  const handleEdit = (book) => {
    setCurrentBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentBook(null);
  };

  const handleSave = () => {
    dispatch(editBookThunk(currentBook));
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentBook((prevBook) => ({
      ...prevBook,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await dispatch(fetchAllBooksThunk());

      setBooks(data.payload.books);
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {books?.map((book) => {
          return (
            <li key={book.isbn}>
              <h3>Title: {book.title}</h3>
              <h3>Author: {book.author}</h3>
              <p>ISBN: {book.isbn}</p>
              <button type="button" onClick={() => handleEdit(book)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(book.isbn)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        handleSave={handleSave}
        handleChange={handleChange}
        title={"Edit Book"}
        value={currentBook}
        checked={currentBook}
      />
    </>
  );
};

export default Library;
