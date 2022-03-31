
//////////////// new code
const products=[
    {
        id:1,
        name: "Apple Watch Series 5",
        price: 339.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
       available: true,
        colors: ["red", "purple", "green"]
    }, 
    {
        id:2,
        name: "Apple iPhone 11 (64GB, Black)",
        price: 669.99,
        rating: 5,
       img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
       brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:3,
        name: "Apple iMac 27-inch",
        price: 999.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:3,
        name: "Apple iMac 27-inch",
        price: 999.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
       brand: "apple",
       available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:4,
        name: "OneOdio A71 Wired Headphones",
        price: 49.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:5,
        name: "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        price: 999.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:6,
        name: "Switch Pro Controller",
        price: 429.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:7,
        name: "Google - Google Home - White/Slate fabric",
        price: 129.29,
       rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "google",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:8,
        name: "Sony 4K Ultra HD LED TV",
        price: 7999.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "apple",
       available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:9,
        name: "OnePlus 7 Pro",
        price: 14.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "Philips",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:10,
        name: "Logitech K380 Wireless Keyboard",
       price: 81.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.a197f12f.png",
       discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "Logitech",
        available: true,
       colors: ["red", "purple", "green"]
    },
    {
        id:11,
        name: "Nike Air Max",
        price: 81.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/11.196910d4.png",
        discription: "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        brand: "Nike",
        available: true,
        colors: ["red", "purple", "green"]
    },

]  
///////////////////set some variables
const searchInput=document.getElementById('searchInput');
const iconDashboard= document.getElementById('icon-dashboard');
//////////set code related of ui

//////////////////
let productList=[];
function displayProduct(){

}
    let output='';
    for(let i=0;i<products.length;i++){
      output+=`
      <div class="product-card">
                                <div class="image-item">
                                <img src="${products[i].img}" alt="">
                               </div>
                                <div class="rate">
                                   <p>lorem</p>
                                   <h6 class="item-price"> ${products[i].price}</h6>
                                </div>
                                <div class="item-name">
                                   <a href="#"> ${products[i].name.slice(0, 20)+'...'}</a>
                                </div>
                                <p class="item-description"> ${products[i].discription.slice(0, 25)+'...'}</p>
                                <div class="wishlist">
                                    <a href="#">
                                        <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        <span>wishlist</span>
                                    </a>
                                </div>
                                <div class="view-in-cart">
                                    <a href="#">
                                        <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-shopping-cart"><circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle><circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle><path data-v-15eba8c6="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                        <span>View In Cart</span>
                                    </a>
                                </div>
                        </div>
      `
    }
document.getElementById('data-table').innerHTML=output;
//////////////////////////////set function search
function searchProduct(){
    let output='';
    for(let i=0;i<products.length;i++){
       if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){
          console.log(products[i].name);
          console.log(searchInput.value)
          output+=`
          <div class="product-card">
                                    <div class="image-item">
                                    <img src="${products[i].img}" alt="">
                                   </div>
                                    <div class="rate">
                                       <p>lorem</p>
                                       <h6 class="item-price"> ${products[i].price}</h6>
                                    </div>
                                    <div class="item-name">
                                       <a href="#"> ${products[i].name.slice(0, 20)+'...'}</a>
                                    </div>
                                    <p class="item-description"> ${products[i].discription.slice(0, 25)+'...'}</p>
                                    <div class="wishlist">
                                        <a href="#">
                                            <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                            <span>wishlist</span>
                                        </a>
                                    </div>
                                    <div class="view-in-cart">
                                        <a href="#">
                                            <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-shopping-cart"><circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle><circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle><path data-v-15eba8c6="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                            <span>View In Cart</span>
                                        </a>
                                    </div>
                            </div>
          `
       }
   }
   document.getElementById('data-table').innerHTML=output;
}

searchInput.addEventListener('keyup',searchProduct);
