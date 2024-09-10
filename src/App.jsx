import Logo from "./components/Logo";
import Library from "./components/Library";
import SearchForm from "./components/SearchForm";
import AddBookBtn from "./components/AddBookBtn";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <div>
        <Logo />
        <SearchForm />
        {/* <button type="button">Add new book</button> */}
        <AddBookBtn />
        <Library books={data} />
      </div>
      {/* {data.length ? <Library books={data} /> : null} */}
    </>
  );
}

export default App;
