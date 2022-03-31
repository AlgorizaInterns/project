import React,{useState} from 'react'
import RangeScroll from '../RangeScroll/RangeScroll'
import './MiniSidebar.css'
import { productsApi } from './dataAPI.js';

export default function MiniSidebar({products,setProduct }) {
           
    // const filteredProduct =(e)=>{
    //  const {value} = e.target
    //    if(value === "ten"){
    //         setData(products.filter(item =>
    //             item.price <= 10
    //         ))

    //     }
    //     console.log(e.target.value);
    //     console.log(products);
    // }
    
const FilterByPrice = (e) => {
    const  value  = e;
    console.log(value);
   if (value === "ten") {
    setProduct(products.filter((item) => item.price <= 10));
    
    } else if  (value === "tenTohundred") {
        setProduct(products.filter((item) => item.price <= 100 && item.price >=10));

    } else if(value === "hundredToFiveHundred") {
        setProduct(products.filter((item) => item.price <= 500 && item.price >=100));
    }else if(value === "lagerThanFiveHundred"){
        setProduct(products.filter((item) => item.price >= 500 ));
    }
    else{
        return setProduct(productsApi);
    }

  console.log(products)
  };
  
    return (
         <div className='sidbar'>

            <div className="custom_radio">
                <label>Price Range</label>
                <br />
                <input type="radio" id="featured-1" name="featured" defaultChecked /><label htmlFor="featured-1" >All</label>
                <br />
                <input type="radio" id="featured-2" name="featured"  value="ten"/><label htmlFor="featured-2" onClick={()=>{FilterByPrice("ten")}} > $10 </label>
                <br />
                <input type="radio" id="featured-3" name="featured" value="tenTohundred" onClick={()=>{FilterByPrice("tenTohundred")}} /><label htmlFor="featured-3" >$10 - $100</label>
                <br />
                <input type="radio" id="featured-4" name="featured" value="hundredToFiveHundred" onClick={()=>{FilterByPrice("hundredToFiveHundred")}} /><label htmlFor="featured-4"  >$100 - $500</label>
                <br />
                <input type="radio" id="featured-5" name="featured"  value="lagerThanFiveHundred" onClick={()=>{FilterByPrice("lagerThanFiveHundred")}} /><label htmlFor="featured-5" > $500 </label>
                <br />

            </div>
            <RangeScroll />
            <div className="custom_radio">
                <label>Price Range</label>
                <br />
                <input type="radio" id="featured-6" name="featured"  /><label htmlFor="featured-6" >Applinances</label>
                <br />
                <input type="radio" id="featured-7" name="featured" /><label htmlFor="featured-7" > Audio</label>
                <br />
                <input type="radio" id="featured-8" name="featured" /><label htmlFor="featured-8" >Cameras & Csmcorders</label>
                <br />
                <input type="radio" id="featured-9" name="featured" /><label htmlFor="featured-9" >Car Electronics & GPS </label>
                <br />
                <input type="radio" id="featured-10" name="featured" /><label htmlFor="featured-10" > Cell Phones </label>
                <br />
                <input type="radio" id="featured-11" name="featured" /><label htmlFor="featured-11" > Computers & Tablets </label>
                <br />
                <input type="radio" id="featured-12" name="featured" /><label htmlFor="featured-12" > Health, Fitness & Beauty </label>
                <br />
                <input type="radio" id="featured-13" name="featured" /><label htmlFor="featured-13" > Office & School Supplies </label>
                <br />
                <input type="radio" id="featured-14" name="featured" /><label htmlFor="featured-14" >TV & Home Theater </label>
                <br />
                <input type="radio" id="featured-15" name="featured" /><label htmlFor="featured-15" >Video Games </label>
                <br />

            </div>
            <div className="custom_radio">
                <label>Brands</label>
                <br />
                <input type="radio" id="featured-16" name="featured" /><label htmlFor="featured-16" >Insigina<i className="fa-solid fa-trademark"></i></label>
                <br />
                <input type="radio" id="featured-17" name="featured" /><label htmlFor="featured-17" > Samsung</label>
                <br />
                <input type="radio" id="featured-18" name="featured" /><label htmlFor="featured-18" >Metra</label>
                <br />
                <input type="radio" id="featured-19" name="featured" /><label htmlFor="featured-19" >HP</label>
                <br />
                <input type="radio" id="featured-20" name="featured"  /><label htmlFor="featured-20" > Apple</label>
                <br />
                <input type="radio" id="featured-21" name="featured" /><label htmlFor="featured-21" > GE </label>
                <br />
                <input type="radio" id="featured-22" name="featured" /><label htmlFor="featured-22" > Sony </label>
                <br />
                <input type="radio" id="featured-23" name="featured" /><label htmlFor="featured-23" > Incipio </label>
                <br />
                <input type="radio" id="featured-24" name="featured" /><label htmlFor="featured-24" >KitchenAid</label>
                <br />
                <input type="radio" id="featured-25" name="featured" /><label htmlFor="featured-25" >Whirlpool </label>
                <br />

            </div>
            <div className="rating">
                <label>Ratings</label>
                <br />
                <div className='starsIcon'>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-regular fa-star"></span>
                    <label>160</label>
                </div>
                <div className='starsIcon'>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-regular fa-star"></span>
                    <span className="fa-regular fa-star"></span>
                    <label>176</label>
                </div>  <div className='starsIcon'>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-regular fa-star"></span>
                    <span className="fa-regular fa-star"></span>
                    <span className="fa-regular fa-star"></span>
                    <label>291</label>
                </div>  <div className='starsIcon'>
                    <span className="fa-solid fa-star checked"></span>
                    <span className="fa-regular fa-star "></span>
                    <span className="fa-regular fa-star"></span>
                    <span className="fa-regular fa-star"></span>
                    <span className="fa-regular fa-star"></span>
                    <label>190</label>
                </div>

            </div>

        </div>
    )
}
