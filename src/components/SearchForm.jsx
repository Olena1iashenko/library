import { RiLoaderLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectError, selectLoading } from "../../redux/slice";

const SearchForm = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    setSearchParams({ query });
    event.target.reset();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your search..."
          type="text"
          defaultValue={searchQuery}
          name="query"
        />
        <button type="submit" disabled={loading} style={{ marginLeft: "10px" }}>
          {loading ? (
            <>
              <RiLoaderLine />
              &nbsp;Loading...
            </>
          ) : (
            "Search"
          )}
        </button>
        {error && (
          <p
            style={{
              color: "red",
              paddingBottom: "5px",
              fontSize: "10px",
              fontStyle: "italic",
            }}
          >
            No books found, try another search
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchForm;
