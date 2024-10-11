import { useEffect, useState } from "react";
import { RiLoaderLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import { searchBookThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/slice";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // Access the books from the Redux store
  const items = useSelector(selectItems);

  const searchQuery = searchParams.get("query") ?? "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getData = async () => {
      setData([]);
      setIsLoading(true);
      setError("");
      try {
        const result = await dispatch(searchBookThunk(searchQuery)).unwrap();
        if (!result.length) {
          throw new Error("Please enter another search");
        }
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchQuery, dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your search..."
          type="text"
          defaultValue={searchQuery}
          name="query"
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{ marginLeft: "10px" }}
        >
          {isLoading ? (
            <>
              <RiLoaderLine />
              &nbsp;Loading...
            </>
          ) : (
            "Search"
          )}
        </button>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </form>
      {/* Render the books or the search result */}
      {items.length > 0 && (
        <ul>
          {items.map((book) => (
            <li key={book.isbn}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
