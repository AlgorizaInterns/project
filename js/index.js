let products=[	
{
id:	1,
name:	"Apple Watch Series 5",
price:	339.99,
rating:	4,
img	:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
,discription:	"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:["red","purple","green",]},
{
id:	2,
name:	"Apple iPhone 11 (64GB, Black)",
price:	669.99,
rating:	5,
img:	"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png"
,discription:"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:	["red","purple","green"]},
{
id:	3,
name:	"Apple iMac 27-inch",
price:	999.99,
rating:	4,
img	:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png"
,discription:	"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:["red","purple","green"]},
{	
id	:4,
name:	"OneOdio A71 Wired Headphones",
price:	49.99,
rating:	3,
img:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png"
,discription:"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:true,
colors:["red","purple","green"]},
{	
id:5,
name:"Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
price:999.99,
rating:	4,
img:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png"
,discription:"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:[	
	"red","purple","green"]},
{	
id:	6,
name:"Switch Pro Controller",
price:	429.99,
rating:	3,
img:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png"
,iscription:"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:["red","purple","green"]
},
{
id:	7,
name:	"Google - Google Home - White/Slate fabric",
price:	129.29,
rating:	4,
img:	"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
,discription:	"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"google",
available:true,
colors:["red","purple","green"]},
{	
id:	8,
name:"Sony 4K Ultra HD LED TV",
price:7999.99,
rating:	5,
img	:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png"
,discription:	"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"apple",
available:	true,
colors:["red","purple","green"]},

{	
id:	9,
name:	"OnePlus 7 Pro",
price:	14.99,
rating:	4,
img:	"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png"
,discription:	"On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
,brand:	"Philips",
available:	true,
colors:["red","purple","green"]}
]
console.log(products)
let productContainer=[];
function viewPro(){
    productContainer.push(products)
    displayProduct()
}

function displayProduct(){
  let newProducts=``;
for(let i =0;i>productContainer.length;i++){
newProducts+=
    `
            <div class="cart-img">
                <a><img src="${productContainer[i].img}"></a>
            </div>
            <div class="rate-cart">
                <a>
                    <span class="material-icons-outlined star ">
                        star
                    </span>
                    <span class="material-icons-outlined  star">
                        star
                        </span>
                
                        <span class="material-icons-outlined   star">
                            star
                            </span>
                
                            <span class="material-icons-outlined  star">
                                star
                                </span>
                                <span class="material-icons-outlined">
                                    star_outline
                                    </span>
                         
                </a>
                <div class="price-cart">
                    <span>${productContainer[i].price}</span>
                </div>
            </div>
     <h5>${productContainer[i].name}</h5>
     <p>${productContainer[i].discription}</p>
            <div class="btn-cart">
   <div class="btn-wishlist">
    <a>
        <span class="material-icons-outlined">
            favorite_border
            </span>
          <span>  Wishlist</span>
        </a>
   </div>
          <div class="btn-view">
            <a >
                <span class="material-icons-outlined">
                    shopping_cart
                    </span> View In Cart</a>
          </div>
            </div>
        

  `
};
document.getElementById('viewItem').innerHTML=newProducts;
}


