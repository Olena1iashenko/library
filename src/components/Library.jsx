import { deleteBookThunk, editBookThunk } from "../../redux/operations";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Book from "./Book";
import { useDispatch } from "react-redux";

const Library = ({ items }) => {
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

  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
          maxWidth: "100%",
        }}
      >
        {items.map((book) => {
          return (
            <Book
              key={book.isbn}
              book={book}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
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
