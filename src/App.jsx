import Logo from "./components/Logo";
import Library from "./components/Library";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <div>
        <Logo />
        <SearchForm />
        <button type="button">Add new book</button>
      </div>
      {/* {data.length ? <Library books={data} /> : null}; */}
    </>
  );
}

export default App;
