const SearchLibrary = ({ data }) => {
  return data.length ? (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}
    >
      {data?.map((book) => {
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
  ) : (
    <p>No books found for your search query</p>
  );
};

export default SearchLibrary;
