import { useState } from "react";
import Library from "../Library";
import Sidebar from "../Sidebar";
import s from "./LibraryApp.module.css";
import Favorites from "../Favorites";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/slice";

function LibraryApp() {
  const favorites = useSelector(selectFavorites);

  const [selectedTab, setSelectedTab] = useState("home");

  const toggleFavorites = (bookId) => {
    if (favorites.includes(bookId)) {
      favorites.filter((id) => id !== bookId);
    } else {
      [...favorites, bookId];
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar className={s.wrapperMain} setSelectedTab={setSelectedTab} />
      {selectedTab === "home" && (
        <Library favorites={favorites} toggleFavorites={toggleFavorites} />
      )}
      {selectedTab === "fav" && <Favorites items={favorites} />}
    </div>
  );
}

export default LibraryApp;
