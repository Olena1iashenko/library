const Library = ({ books }) => {
  return (
    <ul>
      {books?.map((book) => {
        return (
          <li key={book.isbn}>
            <h3>Titlee: {book.title}</h3>
            <h3>Author: {book.author}</h3>
            <p>ISBN: {book.isbn}</p>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Library;
