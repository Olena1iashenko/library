import Logo from "./Logo";
import SearchForm from './SearchForm';
import AddBookBtn from './AddBookBtn'

const Sidebar = ({setSelectedTab, setData}) => {
    return (
    <div style={{
      display: "grid",
      minWidth: '250px',
      height: '100vh',
      gap: '10px',
      padding: '10px',
      background: "rgba(160, 193, 193, 0.5)",
      alignItems: 'start',
      gridTemplateRows: 'repeat(5, 50px)'
    }}
>
    <Logo/>
    <button type="button" onClick={()=>setSelectedTab('home')}>HOME</button>
    <button type="button"onClick={()=>setSelectedTab('fav')}>FAVORITES</button>
    <SearchForm setData={setData} />
    <AddBookBtn />
        </div>
    );
  };
  
  export default Sidebar;