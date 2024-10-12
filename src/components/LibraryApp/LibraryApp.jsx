import { useEffect, useState } from "react";
import Library from "../Library";
import Sidebar from "../Sidebar";
import s from "./LibraryApp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, selectItems } from "../../../redux/slice";
import { fetchAllBooksThunk, searchBookThunk } from "../../../redux/operations";
import { useSearchParams } from "react-router-dom";

function LibraryApp() {
  const items = useSelector(selectItems);
  const favorites = useSelector(selectFavorites);
  const [selectedTab, setSelectedTab] = useState("home");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? "";

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchBookThunk(searchQuery)).unwrap();
    } else {
      dispatch(fetchAllBooksThunk());
    }
  }, [searchQuery, dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        className={s.wrapperMain}
        setSelectedTab={setSelectedTab}
        setSearchParams={setSearchParams}
      />
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
