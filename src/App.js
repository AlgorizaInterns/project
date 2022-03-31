import React , {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content'
import Drawer from "./components/Drawer";
import FilterBar from "./components/FilterBar";
import SearchBar  from "./components/SearchBar";
import data from "./store-demo-data.json"


class App  extends Component{
  constructor(props){
    super(props);

    this.state={

      products:data.products

      /* products:[{img:"",title:"ahmed",pTag:"1345",wishList:"like",cart:"added"}] */
      
    }
    

  }
  
  

  render(){
   
    return(
      <div>
        <Header/>
        <SearchBar jsonFile={data.products}/>
        <Content productsSection={this.state.products}/>
        <Drawer/>
        <FilterBar/>
      </div>
    )

  }
}

/* function App() {
  return (
    <div className="App">
      
    </div>
  );
} */

export default App;
