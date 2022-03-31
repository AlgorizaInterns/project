import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShowEara from './Components/Products/ShowEara/ShowEara';
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <ShowEara/>
    </div>
  );
}

export default App;
