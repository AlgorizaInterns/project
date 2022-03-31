var checkOne = document.getElementById("biggerThan")
var checkTwo = document.getElementById("higherThan100")
var checkThree = document.getElementById("From10")
var checkFour = document.getElementById("From100")
var checkFive = document.getElementById("All")
var dflex = document.getElementById("dflex")

var button = document.getElementById("moon");

console.log(button)
button.addEventListener("click", function() {
    var backColor = document.body.style.backgroundColor
    if(backColor == "white"){
        document.body.style.backgroundColor = "#283046";
        document.body.style.color ="black"
    }
    else if(backColor = "#283046"){
        document.body.style.backgroundColor = "white";
        document.body.style.color ="black"
    }
});
var productsContainer = [
    
    { id:1, productName: "Apple Watch Series 5",  price: 339.99, rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/26.257af602.png",

    discription: "On Retina display that never sleeps...",brand: "apple", available: true, colors: ["red", "purple", "green"]}
    ,
    {
        id:2,
        productName: "Apple iPhone 11 (64GB, Black)",
        price: 669.99,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        rating: 5,
        discription: "On Retina display that never sleeps,..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:3,
        productName: "Apple iMac 27-inch",
        price: 999.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        discription: "On Retina display that never sleeps...",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:4,
        productName: "OneOdio A71 Wired Headphones",
        price: 49.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        discription: "On Retina display that never sleeps,..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id:5,
        productName: "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        price: 999.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        discription: "On Retina display that never sleeps,..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :6,
        productName: "Switch Pro Controller",
        price: 429.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        discription : "On Retina display that never sleeps,..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :7,
        productName: "Google - Google Home - White/Slate fabric",
        price: 129.29,
        rating: 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        discription : "On Retina display that never sleeps,..",
        brand: "google",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :8,
        productName: "Sony 4K Ultra HD LED TV",
        price: 7999.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        discription : "On Retina display that never sleeps,..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :9,
        productName: "OnePlus 7 Pro",
        price: 14.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",

        discription : "On Retina display that never sleeps,..",
        brand: "Philips",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :10,
        productName: "Logitech K380 Wireless Keyboard",
        price: 81.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
        discription : "On Retina display that never sleeps,..",
        brand: "Logitech",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :11,
        productName: "Nike Air Max",
        price: 81.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.a197f12f.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Nike",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :12,
        productName: "New Apple iPad Pro",
        price: 799.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/11.196910d4.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "apple",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :13,
        productName: "Vankyo leisure 3 mini projector",
        price: 99.99,
        rating: 2,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/12.87084176.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Vankyo Store",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :14,
        productName: "Wireless Charger 5W Max",
        price: 10.83,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13.e7c28d6c.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "3M",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :15,
        productName: "Laptop Bag",
        price: 29.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/14.df784ed6.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "TAS",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :16,
        productName: "Adidas Mens Tech Response Shoes",
        price: 54.59,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/15.2b721276.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Adidas",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :17,
        productName: "Oculus Quest All-in-one VR",
        price: 645,
        rating: 1,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/16.a9b3f7ab.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Oculus",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :18,
        productName: "Handbags for Women Large Designer bag",
        price: 39.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/18.fac01044.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Hobo",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :19,
        productName: "Giotto 32oz Leakproof BPA Free ",
        price: 16.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/17.024d4a22.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "3M",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :20,
        productName: "PlayStation 4 Console",
        price: 339.95,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/19.1c1f4cf1.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Sony",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :21,
        productName: "Bugani M90 Portable Bluetooth Speaker",
        price: 56,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/20.ad629602.png",

        discription : "On Retina display that never sleeps, ..",
        brand: "Bugani",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :22,
        productName: "Toshiba Canvio Advance 2TB Portable External ",
        price: 69.99,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/21.940a62ff.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Toshiba",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :23,
        productName: "Tile Pro - High Performance Bluetooth Tracker",
        price: 29.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/23.ec286c40.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Tile",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :24,
        productName: "Ronyes Unisex College Bag Bookbags for Women",
        price: 23.99,
        rating: 2,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/22.450e8e03.png",
        discription : "On Retina display that never sleeps, ..",
        brand: "Ronyes",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :25,
        productName: "Willful Smart Watch for Men Women 2020,",
        price: 29.99,
        rating: 5,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/24.79a14740.png",

        discription : "On Retina display that never sleeps, ..",
        brand: "Willful",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :26,
        productName: "VicTsing Wireless Mouse,",
        price: 10.99,
        rating: 3,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/25.e1f92d21.png",

        discription : "On Retina display that never sleeps, ..",
        brand: "VicTsing",
        available: true,
        colors: ["red", "purple", "green"]
    },
    {
        id :27,
        productName: "Bose Frames Tenor - Rectangular Polarized, ",
        price: 249,
        rating: 4,
        img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/27.9b4c2313.png",

        discription : "On Retina display that never sleeps, ..",
        brand: "Bose",
        available: true,
        colors: ["red", "purple", "green"]
    }

]
var search = document.getElementById("search")

function searchProduct(term){
    
    var search =[];
    for( i=0 ; i<productsContainer.length; i++){
        if(productsContainer[i].productName.toLowerCase().includes(term.toLowerCase() )== true)
        {
           search.push(productsContainer[i])
        }
    }
  displayProducts(search)
}


function displayProducts(productList){
 cartoona=''
 for(i=0; i<productList.length; i++){
   cartoona+=`
   <div class="product" id="product">
   <div class="soraa">
      <img src="${productList[i].img}" alt="">
   </div>
    <div class="iconn">
        <div class="childOne">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="childOne">
          <h5>${productList[i].price}</h5>
      </div>
</div>
<h4>${productList[i].productName}</h4>
<p>${productList[i].discription}</p>
<div class="btn1"> <button>Wishlist</button></div>
<div class="btn1">   <button>Add to cart</button></div>
</div>
 

   `
 }
 document.getElementById("display").innerHTML= cartoona;
}
displayProducts(productsContainer)






function filter(e){
    let expensive = [];
    for (let i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].price >= e ) {
            expensive.push(productsContainer[i]);
        }
    }
    displayProducts(expensive)
}

function filterCheap(e){
    let cheap = [];
    for (let i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].price < e ) {
            cheap.push(productsContainer[i]);
        }
    }
    displayProducts(cheap)
}

checkOne.addEventListener("click" , function(){ filter( 500)})
checkTwo.addEventListener("click" , function(){ filter(100 )})
checkThree.addEventListener("click" , function(){ filterCheap( 100 )})
checkFour.addEventListener("click" , function(){ filterCheap( 500 )})

checkFive.addEventListener("click" , function(){ filter(i)})

// function myFunction() {
//     var x = document.getElementById("navmenu");
//     if (x.className === "navo") {
//       x.className += " responsive";
//     } else {
//       x.className = "navo";
//     }
//   }
var changeStyle = document.getElementById("product")
var dblock = document.getElementById('dblock')
 var changeDisplay = document.getElementById("display")
  dflex.addEventListener("click", function(){
  for(i=0;i<productsContainer.length ; i++){
    
    Object.assign(changeStyle.style,{width:"75%",margin:"auto",marginBottom:"2px"});

  }
    
  })
//   dblock.addEventListener("click", function(){
//     changeDisplay.style.display = "flex"

//   })