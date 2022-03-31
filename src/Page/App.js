import {useState} from 'react'
import products from '../JSON/products.json';
import NavBar from '../components/NavBar/NavBar';
import SideMenu from '../components/SideMenu/SideMenu'
import Shop from '../components/Shop/Shop';
import './App.css';

function App() {

  const [items, setItems] = useState(products.products)
  const [filters, setFilters] = useState({})
  function searchBarFilter(e){
      e.preventDefault();
      const query = e.target.value
      const filteredItems= items.filter((item)=>{    
          return item.name.includes(query);
      })
      if(query===''){
          return setItems(products.products)
      }else{
          return setItems(filteredItems)
      }
  }

  return (
    <div className="App-container">
      <header>
        <NavBar
          searchBarFilter = {searchBarFilter}
        />
      </header>
      <aside className='App-side-menu'>
        <SideMenu/>
      </aside>
      <main>
        <Shop
          searchBarFilter = {searchBarFilter}
        />
      </main>
        {/* <footer>

        </footer> */}
    </div>
  );
}

export default App;
