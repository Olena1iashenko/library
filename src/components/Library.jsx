import { useDispatch } from "react-redux";
import {
  deleteBookThunk,
  editBookThunk,
  fetchAllBooksThunk,
} from "../../redux/operations";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Book from "./Book";

const Library = ({ books, setBooks, handleAddToFavorites }) => {
  const dispatch = useDispatch();
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
          padding: '10px'
        }}
      >
        {books?.map((book) => {
          return (
            <Book key={book.isbn} book={book} handleAddToFavorites={handleAddToFavorites}/>
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
