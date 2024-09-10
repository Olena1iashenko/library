import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "./Modal";
import { addBookThunk } from "../../redux/operations";

const AddBookBtn = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    isBorrowed: false,
  });

  const handleAddNewBook = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewBook({
      title: "",
      author: "",
      isbn: "",
      isBorrowed: false,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(newBook));
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleAddNewBook}>
          Add New Book
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        handleSave={handleSave}
        handleChange={handleChange}
        title={"Add New Book"}
        value={newBook}
        checked={newBook.isBorrowed}
      />
    </>
  );
};

export default AddBookBtn;
