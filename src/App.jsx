import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import AddBookBtn from "./components/AddBookBtn";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import SearchLibrary from "./components/SearchLibrary";
import Library from "./components/Library";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const searchQuery = searchParams.get("query") ?? "";
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <Logo />
        <SearchForm
          data={data}
          setData={setData}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
        />
        <AddBookBtn />
      </div>
      {searchQuery.trim() === "" ? (
        <Library books={data} setBooks={setData} />
      ) : (
        <SearchLibrary data={data} />
      )}
    </>
  );
}

export default App;
