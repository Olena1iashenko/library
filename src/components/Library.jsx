import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookThunk,
  editBookThunk,
  fetchAllBooksThunk,
} from "../../redux/operations";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Book from "./Book";
import { selectItems } from "../../redux/slice";

const Library = ({ toggleFavorites, favorites }) => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooksThunk());
  }, [dispatch]);

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

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          padding: "10px",
        }}
      >
        {items.books?.map((book) => {
          return (
            <Book
              key={book.isbn}
              book={book}
              favorites={favorites}
              toggleFavorites={toggleFavorites}
            />
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
