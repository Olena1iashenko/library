const Book = ({ book, toggleFavorites, favorites }) => {
  return (
    <li>
      <h3>Title: {book.title}</h3>
      <h3>Author: {book.author}</h3>
      <p>ISBN: {book.isbn}</p>
      <button type="button" onClick={() => handleEdit(book)}>
        Edit
      </button>
      <button type="button" onClick={() => handleDelete(book.isbn)}>
        Delete
      </button>
      <button type="button" onClick={() => toggleFavorites(book)}>
        {favorites?.includes(book.isbn)
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </li>
  );
};

export default Book;
