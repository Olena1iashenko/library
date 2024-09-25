import Book from "./Book";

const Favorites = ({books}) => {
  return (<>
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
            <Book key={book.isbn} book={book}/>
          );
        })}
      </ul></>
  );
};

export default Favorites;