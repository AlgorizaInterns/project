import React, { useState, useRef } from "react";
import "./Filter.css";
import Products from "./data.json";

export const Filter = ({ products, fill, setBar }) => {
  const isRef = useRef();
  const [pro, setPro] = useState(Products.products);
  const [range, setRange] = useState();
  setBar(isRef);
  const FilterByPrice = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value === "all") {
      setPro(Products.products);
      fill(pro);
    } else if (value === "ten") {
      fill(pro);
      setPro(pro.filter((el) => el.price <= 10));
    } else if (value === "tentohund") {
      setPro(pro.filter((el) => el.price > 10 && el.price < 100));
      fill(pro);
    } else if (value === "hundtofive") {
      setPro(pro.filter((el) => el.price > 100 && el.price < 500));
      fill(pro);
    } else if (value === "five") {
      setPro(pro.filter((el) => el.price > 500));
      fill(pro);
    } else {
      return setPro(Products.products);
    }
  };
  // It's Easy To Filter Bay Brand & Category but Json didn't have match data
  const priceRange = (e) => {
    setRange(e.target.value);
  };
  const closeFilter = () => {
    isRef.current.style.left = "-260px";
  };
  return (
    <div className="filter" ref={isRef}>
      <p className="closeFilter" onClick={closeFilter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </p>
      <div className="multi">
        <ul>
          <li className="title">Multi Range</li>
          <li>
            <input
              type="radio"
              name="range"
              id="all"
              value="all"
              onClick={FilterByPrice}
              defaultChecked
            />
            <label htmlFor="all">All</label>
          </li>
          <li>
            <input
              type="radio"
              name="range"
              id="ten"
              value="ten"
              onClick={FilterByPrice}
            />
            <label htmlFor="ten">&#60;&#61; $10</label>
          </li>
          <li>
            <input
              type="radio"
              name="range"
              id="ten_100"
              value="tentohund"
              onClick={FilterByPrice}
            />
            <label htmlFor="ten_100">$10 - $100</label>
          </li>
          <li>
            <input
              type="radio"
              name="range"
              id="hund_500"
              value="hundtofive"
              onClick={FilterByPrice}
            />
            <label htmlFor="hund_500">$100 - $500</label>
          </li>
          <li>
            <input type="radio" name="range" id="five" value="five" />
            <label htmlFor="five">&#62;&#61; $500</label>
          </li>
        </ul>
      </div>
      <div className="rangeline">
        <ul>
          <li className="title">Price Range : {range}</li>
          <li>
            <input
              type="range"
              name="range"
              min="0"
              max="100"
              id="range"
              onClick={FilterByPrice}
              onChange={priceRange}
            />
          </li>
        </ul>
      </div>
      <div className="categories">
        <ul>
          <li className="title">Categories</li>
          <li>
            <input type="radio" name="cat" id="appliances" value="appliances" />
            <label htmlFor="appliances">Appliances</label>
          </li>
          <li>
            <input type="radio" name="cat" id="audio" value="audio" />
            <label htmlFor="audio">Audio</label>
          </li>
          <li>
            <input type="radio" name="cat" id="cameras" value="cameras" />
            <label htmlFor="cameras">Cameras & Camcorders</label>
          </li>
          <li>
            <input type="radio" name="cat" id="car" value="car" />
            <label htmlFor="car">Car Electronics & GPS</label>
          </li>
          <li>
            <input type="radio" name="cat" id="phones" value="phones" />
            <label htmlFor="phones">Cell Phones</label>
          </li>
          <li>
            <input type="radio" name="cat" id="computers" value="computers" />
            <label htmlFor="computers">Computers & Tablets</label>
          </li>
          <li>
            <input type="radio" name="cat" id="health" value="health" />
            <label htmlFor="health">Health, Fitness & Beauty</label>
          </li>
          <li>
            <input type="radio" name="cat" id="office" value="office" />
            <label htmlFor="office">Office & School Supplies</label>
          </li>
          <li>
            <input type="radio" name="cat" id="tv" value="tv" />
            <label htmlFor="tv">TV & Home Theater</label>
          </li>
          <li>
            <input type="radio" name="cat" id="games" value="games" />
            <label htmlFor="games">Video Games</label>
          </li>
        </ul>
      </div>
      <div className="brands">
        <ul>
          <li className="title">Brands</li>
          <li>
            <input type="radio" name="brands" id="insignia" value="insignia" />
            <label htmlFor="Insignia">
              insignia<sup>TM</sup>
            </label>
          </li>
          <li>
            <input type="radio" name="brands" id="samsung" value="samsung" />
            <label htmlFor="samsung">Samsung</label>
          </li>
          <li>
            <input type="radio" name="brands" id="metra" value="metra" />
            <label htmlFor="metra">Metra</label>
          </li>
          <li>
            <input type="radio" name="brands" id="hp" value="hp" />
            <label htmlFor="hp">hp</label>
          </li>
          <li>
            <input type="radio" name="brands" id="apple" value="apple" />
            <label htmlFor="apple">Apple</label>
          </li>
          <li>
            <input type="radio" name="brands" id="ge" value="ge" />
            <label htmlFor="ge">GE</label>
          </li>
          <li>
            <input type="radio" name="brands" id="sony" value="sony" />
            <label htmlFor="sony">Sony</label>
          </li>
          <li>
            <input type="radio" name="brands" id="incipio" value="incipio" />
            <label htmlFor="incipio">Incipio</label>
          </li>
          <li>
            <input
              type="radio"
              name="brands"
              id="kitchenAid"
              value="kitchenAid"
            />
            <label htmlFor="kitchenAid">KitchenAid</label>
          </li>
          <li>
            <input
              type="radio"
              name="brands"
              id="whirlpool"
              value="whirlpool"
            />
            <label htmlFor="whirlpool">Whirlpool</label>
          </li>
        </ul>
      </div>
      <div className="ratings">
        <ul>
          <li className="title">Ratings</li>
          <li className="rate">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span> &up </span>
            </div>
            <div style={{ textAlign: "right" }}>160</div>
          </li>
          <li className="rate">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span> &up </span>
            </div>
            <div style={{ textAlign: "right" }}>160</div>
          </li>
          <li className="rate">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span> &up </span>
            </div>
            <div style={{ textAlign: "right" }}>160</div>
          </li>
          <li className="rate">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span> &up </span>
            </div>
            <div style={{ textAlign: "right" }}>160</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Filter;
