import Book from "./Book";

const Favorites = ({ items }) => {
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
        {items?.map((item) => {
          return <Book key={item.isbn} book={item} />;
        })}
      </ul>
    </>
  );
};

export default Favorites;
