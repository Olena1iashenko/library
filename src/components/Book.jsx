const Book = ({book, handleAddToFavorites}) => {

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
              <button type="button" onClick={() => handleAddToFavorites(book)}>
                Add to favorites
              </button>
            </li>
          )}

export default Book;