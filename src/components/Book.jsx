import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, selectFavorites } from "../../redux/slice";
import { FaStar } from "react-icons/fa";

const Book = ({ book, handleDelete, handleEdit }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favBook) => favBook.isbn === book.isbn);

  const toggleFavorites = (book) => {
    dispatch(addToFavorites(book));
  };
  return (
    <li>
      <h3>Title: {book.title}</h3>
      <h3>Author: {book.author}</h3>
      <p>ISBN: {book.isbn}</p>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <button type="button" onClick={() => handleEdit(book)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(book.isbn)}>
          Delete
        </button>
        <button type="button" onClick={() => toggleFavorites(book)}>
          {/* {isFavorite ? "<Remove from Favorites>" : "Add to Favorites"} */}
          {isFavorite ? <FaStar color="gold" /> : <FaStar />}
        </button>
      </div>
    </li>
  );
};

export default Book;
