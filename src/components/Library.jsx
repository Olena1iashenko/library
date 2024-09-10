import { useDispatch } from "react-redux";
import { deleteBookThunk, editBookThunk } from "../../redux/operations";
import Modal from "./Modal";
import { useState } from "react";

const Library = ({ books }) => {
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
      <ul>
        {books?.map((book) => {
          return (
            <li key={book.isbn}>
              <h3>Titlee: {book.title}</h3>
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
        currentBook={currentBook}
        handleSave={handleSave}
        handleChange={handleChange}
        title={"Edit Book"}
      />
    </>
  );
};

export default Library;
