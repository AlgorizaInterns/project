<template>
  <div class="shop">
      <div class="content">
        <div class="shop-content">
         
           <p>Shop</p> 
          <p class="line"></p>
          <P><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></P>
          <p>Ecommerce</p>
           <p>shop</p>
      </div>
        <div class="setting">
        <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>
      </div>
      </div>
  </div>
    <div class="filter">
      <div class="content">
        <div class="filter-content">
           <p  class="pargr">Filter</p>
           <p><a  href="#"  @click="opentoggle" class="par_toggle"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a></p> 
         </div>
        
      <div class="setting">
         <div>
           <p class="found"> {{arr.lenght}} Results found </p>
         </div>

     <div>
      <form >
     <div>
      <select id="country" name="country" v-model="role" @change="selectFun">
       <option value="Highest">Highest</option>
       <option value="Features">Features</option>
       <option value="Lowtest">Lowtest</option>
      </select>
     </div>
      <div class="switch-field">
		<input type="radio" id="radio-one" name="switch-one" value="yes" checked @change=" closeCart()"/>
		<label for="radio-one"><svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect data-v-15eba8c6="" x="3" y="3" width="7" height="7"></rect><rect data-v-15eba8c6="" x="14" y="3" width="7" height="7"></rect><rect data-v-15eba8c6="" x="14" y="14" width="7" height="7"></rect><rect data-v-15eba8c6="" x="3" y="14" width="7" height="7"></rect></svg></label>
		<input  type="radio" id="radio-two" name="switch-one" value="no"  @change="opencart()" />
	   	<label  for="radio-two"><svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line data-v-15eba8c6="" x1="8" y1="6" x2="21" y2="6"></line><line data-v-15eba8c6="" x1="8" y1="12" x2="21" y2="12"></line><line data-v-15eba8c6="" x1="8" y1="18" x2="21" y2="18"></line><line data-v-15eba8c6="" x1="3" y1="6" x2="3.01" y2="6"></line><line data-v-15eba8c6="" x1="3" y1="12" x2="3.01" y2="12"></line><line data-v-15eba8c6="" x1="3" y1="18" x2="3.01" y2="18"></line></svg></label>
	     </div>
      </form>
     </div>
      </div>
      </div>
  </div>
  <section class="products">
    
    <div class="container1">
     
      <div class="checkbox">
     <ul>
    <li><p>Multi Range</p></li>
   <li><label class="labal">All
  <input type="radio" checked name="radio" v-model="All" 
   @change="displayAll" value="All">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal"> &#60;&#61; $10
  <input type="radio"  name="radio"   @click="displayless">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">$10 -$100
  <input type="radio"  name="radio" @change="displayMore">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">$100 - $500
  <input type="radio"  name="radio"  @change="displayMore2">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">&#62;&#61;$500
  <input type="radio"  name="radio"  @change="displayMore3">
  <span class="checkmark"></span>
   </label></li>
    <li><h2>Price Range</h2></li>
    <li><input type="range" min="1" max="100" value="50" class="slider"></li>
    <li><h2>Categories</h2></li>
     <li><label class="labal">Appliances
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Audio
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Cameras & Camcorders
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Car Electronics & GPS
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Cell Phones
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Computers & Tablets
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Health, Fitness & Beauty
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Office & School Supplies
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">TV & Home Theater
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Video Games
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><h2>Brands</h2></li>
   <li><label class="labal">Insignia™
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Samsung
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Metra
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">HP
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Apple
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">GE
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Sony
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Incipio
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">KitchenAid
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Whirlpool
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
  <li><h2>Ratings</h2></li>
  <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span></li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span></li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span> </li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span> </li>
     
     </ul>
       </div>
       <!--         ---------------------    start cards -->
   <div class="cards">
      <div class="shop-cards">
      <div class="search">
        <form class="example" action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" v-model="search" @keyup="searchFun">
      </form>
      </div>
       <!-- <div class="slider">
  <div class="slides">
    <div id="slide-1">
      <div class="card" v-for="product in products" :key="product.id">
   <img alt="Vue logo" :src="product.img"  style="width:100%">
  <div class="card-content">
    <div class="price">
    <div style="padding:0 10px;" >
      <p>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{product.price}}</p>
    <p> <a href="#">{{product.name}}...</a></p>
    <p class="discription">{{product.discription}}</p>
     </div>
   <div class="card-button">
    <p> <a href="#" class="Wishlist">Wishlist</a>
        <a href="#" class="cart">View In Cart</a></p>
    </div>
    </div>
  </div>
      </div>
    </div>
    <div id="slide-2">
     <div class="card" v-for="product in products" :key="product.id">
   <img alt="Vue logo" :src="product.img"  style="width:100%">
  <div class="card-content">
    <div class="price">
    <div style="padding:0 10px;" >
      <p>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{product.price}}</p>
    <p> <a href="#">{{product.name}}...</a></p>
    <p class="discription">{{product.discription}}</p>
     </div>
   <div class="card-button">
    <p> <a href="#" class="Wishlist">Wishlist</a>
        <a href="#" class="cart">View In Cart</a></p>
    </div>
    </div>
  </div>
  </div>
    </div>
    <div id="slide-3">
       <div class="card" v-for="product in products" :key="product.id">
   <img alt="Vue logo" :src="product.img"  style="width:100%">
  <div class="card-content">
    <div class="price">
    <div style="padding:0 10px;" >
      <p>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{product.price}}</p>
    <p> <a href="#">{{product.name}}...</a></p>
    <p class="discription">{{product.discription}}</p>
     </div>
   <div class="card-button">
    <p> <a href="#" class="Wishlist">Wishlist</a>
        <a href="#" class="cart">View In Cart</a></p>
    </div>
    </div>
  </div>
  </div>
    </div>
  </div>
  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  
</div> -->
      
     <div class="card" v-for="product in arr" :key="product.id"  v-bind:style="{display:open}">
   <img alt="Vue logo" :src="product.img"  style="width:100%">
  <div class="card-content">
    <div class="price">
    <div style="padding:0 10px;" >
      <p>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 
     <span style="margin-left:5rem">{{product.price}}</span></p>
    <p> <a href="#">{{product.name}}...</a></p>
    <p class="discription">{{product.discription}}</p>
     </div>
   <div class="card-button">
    <p> <a href="#" class="Wishlist">Wishlist</a>
        <a href="#" class="cart">View In Cart</a></p>
    </div>
    </div>
  </div>
      </div> 
        
        <div class="cart" v-for="product in arr" :key="product.id"  v-bind:style="{display:block}">
        <div class="cart-content">
          <div class="block-img">
             <img alt="Vue logo" :src="product.img"  style="width:100%">
        </div>
        <div class="block1">
          <p> <a href="#">{{product.name}}...</a></p>
          <p>   <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> </p>
          <p class="discription">{{product.discription}}</p>
          
        </div>
        <div class="block2">
              <p style="color:#7367f0; font-size:1.2rem;">  <span >${{product.price}}</span></p>
                <div class="card-button">
               <p> <a href="#" class="Wishlist">Wishlist</a>
            <a href="#" class="cart">View In Cart</a></p>
              </div>
              </div>
        </div>
      </div>
  </div>
 

   </div>
      </div>
 
  </section>
<footer>
  <div class="footer_content">
    <p><span> COPYRIGHT © 2022
    <a href="#">Pixinvent</a><span>, All rights Reserved</span></span></p>
  <p><span>Hand-crafted &amp; Made with <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-danger stroke-current feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></span></p>
  </div>
  <button>Buy Now</button>
 </footer>
    <div class="overlay2" v-if="flag" @click="opentoggle">
    <div class="checkbox1">
     <ul>
    <li><p>Multi Range</p></li>
   <li><label class="labal">All
  <input type="radio" checked name="radio" v-model="All" 
   @change="displayAll" value="All">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal"> &#60;&#61; $10
  <input type="radio"  name="radio"   @click="displayless">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">$10 -$100
  <input type="radio"  name="radio" @change="displayMore">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">$100 - $500
  <input type="radio"  name="radio"  @change="displayMore2">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">&#62;&#61;$500
  <input type="radio"  name="radio"  @change="displayMore3">
  <span class="checkmark"></span>
   </label></li>
    <li><h2>Price Range</h2></li>
    <li><input type="range" min="1" max="100" value="50" class="slider"></li>
    <li><h2>Categories</h2></li>
     <li><label class="labal">Appliances
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Audio
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Cameras & Camcorders
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Car Electronics & GPS
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Cell Phones
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Computers & Tablets
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Health, Fitness & Beauty
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
    <li><label class="labal">Office & School Supplies
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">TV & Home Theater
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Video Games
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><h2>Brands</h2></li>
   <li><label class="labal">Insignia™
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Samsung
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Metra
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">HP
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Apple
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">GE
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Sony
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Incipio
  <input type="radio" name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">KitchenAid
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
   <li><label class="labal">Whirlpool
  <input type="radio"  name="radio">
  <span class="checkmark"></span>
   </label></li>
  <li><h2>Ratings</h2></li>
  <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span></li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span></li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span> </li>
     <li>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="#ff9f43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    <svg data-v-0f9303ea="" xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-0f9303ea="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <span>&up</span> </li>
     
     </ul>
       </div>
    </div>
</template>

<script>

export default {
components:{
  
},
data(){
        return{
          flag:false,
          role:'',
           cardFlag:false,
            products:[ ],
            selected_data:[],
            arr:[],
            search:'',
            block:"none",
             open:"block"
        }
    },

    mounted(){
       
    fetch('http://localhost:3000/products')
    .then((res)=> res.clone().json())
    .then((data)=> { 
     this.products=data
     this.arr=data
    }).catch(err => console.log(" error found"+err.message))
        
        
    },
    methods:{
      opencart(){
            this.block="block"  
            this.open="none"
      },
       closeCart(){
            this.block="none"  
            this.open="block"
      },
      opentoggle(){
        this.flag= !this.flag
      },
     
      onChange(event){
        this.All = event.target.value;
            
      },
      displayAll(){
           this.arr=this.products
           return this.arr
      },
      displayless(){
          this.selected_data =this.products.filter((item)=>{ 
             return item.price <=10 
         })
         this.arr=this.selected_data
           console.log("dddddd" + this.arr)
          return this.arr 
      },
      displayMore(){
        this.selected_data =this.products.filter((item)=>{ 
             return (item.price <= 100 && item.price >= 10 )
         })
         this.arr=this.selected_data
          return this.arr 
      },
       displayMore2(){
        this.selected_data =this.products.filter((item)=>{ 
             return (item.price <= 500 && item.price >= 100 )
         })
         this.arr=this.selected_data
          return this.arr 
      },
      
      displayMore3(){
        this.selected_data =this.products.filter((item)=>{ 
             return ( item.price >= 500 )
         })
         this.arr=this.selected_data
          return this.arr 
      },
       searchFun(){
         this.selected_data =this.products.filter((item)=>{
           return item.name.toLowerCase().includes(this.search.toLowerCase())
         })
         this.arr=this.selected_data
         console.log("computed")
         return this.arr
       },
        selectFun(){
          this.selected_data =this.products.filter((item)=>{
            if(this.role=="Features")
           return item.price >=10
           else if(this.role == "Highest")
               return item.price >=500

             else return   item.price <=100
         })
         this.arr=this.selected_data
         return this.arr
      },
    },
    computed:{
    
      
    },
}

</script>

<style lang="scss">
 
   .shop{
     font-family: Montserrat,Helvetica,Arial,serif;
    position: relative;
    width:100%; 
    height:70px;
    overflow: hidden;
   display:flex;
   justify-content:flex-end;
    // background-color: rgb(216, 18, 18);
    // align-items:center;
  .content{
   width: 81%;
   overflow: hidden;
   height:60px;
   display:flex;
   align-items:center;
   justify-content: space-between;

   .shop-content {
   width: 60%;
   overflow: hidden;
   height:60px;
   display:flex;
   align-items:center;
    margin-left: 1rem;
 .line{
     height:30px;
     border-left:1px solid #7267f094;
   }
   p:first-child{
      font-size:1.5rem;
      color:#636363;
      padding:0 14px 0 0 ;
      
   }
   p{
     font-size: 0.9rem;
      color: #7367f0;
      padding:0 14px 0 0 ;
   }
   p:last-child{
      color:#636363;
   }
    
  }///end shop
  
  .setting{
    margin-right:0.9rem;
    button{
      background-color:#7367f0;
      padding:0.8rem;
      border-radius: 10px;
      border: none;
      svg{
        color:#fff;
      }
    }
  }
    }
    
}
.products{
 // background:#141316;
   font-family: Montserrat,Helvetica,Arial,serif;
    position: relative;
    width:100%; 
    height:210vh;
    overflow: hidden;
    display:flex;
    justify-content:flex-end;
.container1{
   font-family: Montserrat,Helvetica,Arial,serif;
    width:81%; 
    height:220vh;
   // background:#7367f0;
    display:flex;
    justify-content:space-around;
   // align-items:center;
     overflow: hidden;
    .checkbox{
        width:25%;
       background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius:4px;
        height:190vh;
        color:#625f6e;
        ul{
         li h2 {
           margin:35px 0 14px 0;
            font-size: 14px;
          }
          li{
                 svg[fill="none"]{
                    color:#b9b9c3; 
                 }
               svg{
               color:#e29609; }
               span{
                 color:#7367f0;
               }
          }
         
          
        }
  .labal {
  color:#625f6e;
  display: block;
  position: relative;
  padding-left: 1.7rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.labal input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border:1px solid #625f6e59;
  border-radius: 50%;
}
.labal:hover input ~ .checkmark {
  background-color: #7367f0;
}

/* When the radio button is checked, add a blue background */
.labal input:checked ~ .checkmark {
  background-color: #7367f0;
}
    }
  
}
  
}

  .cards{
     // background-color: cyan;
      width:71%;
     height:205vh;
     display:flex;
    //align-items:center;
    overflow: hidden;
    .shop-cards{
    width:100%;
    position: relative;
   // height:200vh;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    box-sizing: border-box;
    overflow: hidden;
    flex-direction: row;
    .search{
        width:100%;
        text-align: center;
        input{
            width:100%;
            padding: 15px 20px;
            margin-bottom:10px;
             display: inline-block;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border:none;
            border-radius: 4px;
            box-sizing: border-box;
            outline: none;
        }
    }
     } 
  .card {
   font-family: Montserrat,Helvetica,Arial,serif;
   transition: 0.3s;
   width:32%;
  height:390px;
  border-radius: 5px;
    margin-bottom: 1.5rem;
   background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
  .card-content {
    width:100%;
    height:100%;
    display:flex;
    .discription{
      display: -webkit-box;   
   -webkit-line-clamp: 1;   
   -webkit-box-orient: vertical;     
   overflow: hidden; 
   font-weight: 400;
    line-height: 1.45;
    color: #6e6b7b;
    }
     p{
       svg{
         color:#ff9f43;
       }
       span{
         color:#625f6e;
       }
     }
    .price{
      box-sizing:border-box;
       width:100%;
       position:relative;
       .card-button{
        
       }
    }
   
  a{
      text-decoration: none;
  }
  
   
   .Wishlist , .cart{
          text-align: center;
           display:block;
          padding:15px 0px;
          background:#d6d5db7c;
          border-radius:1px;
          width:100%;
         // height:;
          color: #000;
      }
      .cart{
          color:#fff;
           background:#7367f0;
      }
  
  } 
  
  .discription{
        white-space: nowrap;
        overflow:hidden;
        color: #625f6e;
        font-size: 12px;
  }
    p{
         
        a{
       
        color: #625f6e;
        font-size: 14px;
        white-space: nowrap;
        overflow:hidden;
       }
      
    }
      
}
   }

footer{
 position:relative;
  height:50px;
   font-size:0.9rem;
  width:100%;
  color:#625f6e;
  display:flex;
  justify-content:flex-end;
  //align-items:center;
  .footer_content{
     //background:red;
  display:flex;
  justify-content:space-between;
    width:81%;
    a{
       
      color:#7367f0;
      text-decoration:none;
    }
    svg{
      color:#ea5455;
    }
  }
  button{
     display:block;
     padding:15px 30px;
      position:fixed;
     background:#ea5454ef;
     bottom:1.5rem;
     color:#fff;
     border-radius:10px;
     border:none;
     right:1rem;
     font-size:14px;
     font-weight: bold;
      box-shadow: 0 4px 8px 0 rgba(240, 22, 22, 0.514), 0 6px 20px 0 rgba(228, 6, 6, 0.19);
  }
}
 

 .filter{
    font-family: Montserrat,Helvetica,Arial,serif;
    position: relative;
    width:100%; 
    height:60px;
    overflow: hidden;
     display:flex;
   justify-content:flex-end;
   color:#625f6e;
   font-size:1rem;
  
  .content{
   width: 81%;
   overflow: hidden;
   height:100px;
   display:flex;
   justify-content: space-between;
 // background-color: rgb(19, 17, 17);
   .filter-content {
    width: 25%;
    height:60px;
    margin-left: 1rem;
   // background-color: rgb(19, 17, 17);
      .par_toggle{
        display:none;
      }
    
  }///end
  form{
    padding:10px;
    display:flex;
    //justify-content:center;
     // align-items:center;
  }
  select {
  
  padding: 12px 25px;
  border: 1px solid #7367f0 ;
  border-radius: 4px;
  background-color: #fff;
  outline: none;
  color:#7367f0;
  font-size: 14px;
 
} 
  .setting{
    // background-color:#7367f0;
    margin-right:0.9rem;
    width:70%;
    display:flex;
    justify-content:space-between;
    button{
      background-color:#7367f0;
      padding:0.8rem;
      border-radius: 10px;
      border: none;
      svg{
        color:#fff;
      }
    }
  }
    }
    
}


.switch-field {
	display: flex;
	margin-bottom: 36px;
	overflow: hidden;
  margin-left: 10px;
}

.switch-field input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.switch-field label {
	background-color: #fff;
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 11px 17px;
	margin-right: 0px;
	border: 1px solid #7367f0 ;
//	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
	transition: all 0.1s ease-in-out;
  svg{
    color:#7367f0 ;
  }
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
	background-color: #7267f0a2 ;
	box-shadow: none;
}

.switch-field label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
	border-radius: 0 4px 4px 0;
}

.overlay2 {
  height: 100%;
  width: 100%;
  background:#5b58647a;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

   .checkbox1{
       position:absolute;
       top:0;
       left: 0;
      
        width:35%;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius:4px;
        color:#625f6e;
        ul{
         li h2 {
           margin:35px 0 14px 0;
            font-size: 14px;
          }
          li{
                 svg[fill="none"]{
                    color:#b9b9c3; 
                 }
               svg{
               color:#e29609; }
               span{
                 color:#7367f0;
               }
          }
         
          
        }
  .labal {
  color:#625f6e;
  display: block;
  position: relative;
  padding-left: 1.7rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.labal input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border:1px solid #625f6e59;
  border-radius: 50%;
}
.labal:hover input ~ .checkmark {
  background-color: #7367f0;
}

/* When the radio button is checked, add a blue background */
.labal input:checked ~ .checkmark {
  background-color: #7367f0;
}
    }
}
/////////////////////////////////////////////
@media screen and (max-width:950px) {
   .shop{
   justify-content:center;
   //background-color: rgb(216, 18, 18);
    // align-items:center;
  .content{
   width: 95%;
  }
}
.filter{
   justify-content:center;
  // background:red;
    .pargr{
      display:none ;
    }
    .par_toggle{
      display:block !important;
      color:rgb(102, 93, 93);
    }
    .found{
      display:none;
    }
  .content{
   width: 95%;
  }}
  .checkbox{
    display:none;
  }
  .products{
    justify-content:center;
.container1{
    width:100%; 
    display:flex;
    justify-content:space-around;
    .cards{
      width:95%;
    }
  
}}

}
////////////////////////////////////cart 2 /////////////////
 .cart{
    font-family: Montserrat,Helvetica,Arial,serif;
    display:flex;
    justify-content:center;
    width:100%;
     color:#625f6e ;
   // background:red;;
   .cart-content{
     display:flex;
      border-radius: 10px;
       height:250px;
      margin-bottom:1.5rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      overflow:hidden;

   }
   .block-img{
     display:flex;
     align-items:center;
     text-align: center;
      width:25%;
     // background:red;
      img{
        width:100%;
      }
    }
    .block2{
      padding:10px 10px;
      width:25%;
       text-align: center;
       border-left:1px solid #6363635b;
      a{
      text-decoration: none;
  }
  
   
   .Wishlist , .cart{
          text-align: center;
           display:block;
          padding:10px 0px;
          background:#d6d5db62;
          border-radius:5px;
          width:100%;
         // height:;
          color: rgb(54, 53, 53);
          margin-top:10px;
      }
      .cart{
         background: #7367f0;
         color: #fff;
      }
    }
    .discription{
      display: -webkit-box;   
   -webkit-line-clamp: 5;   
   -webkit-box-orient: vertical;     
   overflow: hidden; 
   font-weight: 400;
    line-height: 1.45;
    color: #6e6b7b;
    }
   .block1{
     
     box-sizing:border-box;
       width:50%;
       padding:10px 5px;
     font-size: 14px;
      
     svg{
       color:#e29609;
     }
     a{
        color:#625f6eee ;
        text-decoration: none;
     }
   }
  }
  .cartHorizental{
    display:none;
  }
  ////////////////////////////////////////////////end
@media screen and (max-width:700px) {
  .shop-cards{
    height:200vh !important;
    overflow:none;
  }
   .card {
   width:47% !important;
   height:300px !important;
   
}
}
</style>