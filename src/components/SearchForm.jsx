import { useEffect, useState } from "react";
import { RiLoaderLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
        const data = await getBooks(searchQuery);
        if (!data.length) {
          throw new Error("Please enter another search");
        }
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchQuery]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your search..."
        type="text"
        defaultValue={searchQuery}
        name="query"
      />
      <button type="submit" disabled={isLoading}>
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
  );
};

export default SearchForm;
