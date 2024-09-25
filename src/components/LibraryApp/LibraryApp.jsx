import { useState } from "react";
import Library from "../Library";
import Sidebar from "../SIdebar";
import s from './LibraryApp.module.css';
import Favorites from "../Favorites";

function LibraryApp() {

  const [data, setData] = useState([]);
  const [favorites, setToFavorites] = useState([])
  const [selectedTab, setSelectedTab] = useState('home');

  const handleAddToFavorites =(book)=>{
    setToFavorites(prev=>[...prev, book])
  }
  return (
    < div style={{display: 'flex'}}>
        <Sidebar className={s.wrapperMain} setSelectedTab={setSelectedTab}/>
        {selectedTab === 'home' && <Library books={data} setBooks={setData} handleAddToFavorites={handleAddToFavorites}/>}
        {selectedTab === 'fav' && <Favorites books={favorites}/>}
    </div>
  );
}

export default LibraryApp;
