import { useEffect, useState } from "react";
import Library from "../Library";
import Sidebar from "../Sidebar";
import s from "./LibraryApp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, selectItems } from "../../../redux/slice";
import { fetchAllBooksThunk } from "../../../redux/operations";

function LibraryApp() {
  const items = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);
  const [selectedTab, setSelectedTab] = useState("home");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooksThunk());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar className={s.wrapperMain} setSelectedTab={setSelectedTab} />
      {selectedTab === "home" && <Library items={items} />}
      {selectedTab === "fav" &&
        (favorites.length > 0 ? (
          <Library items={favorites} />
        ) : (
          <div className={s.wrapper}>No books added yet</div>
        ))}
    </div>
  );
}

export default LibraryApp;
