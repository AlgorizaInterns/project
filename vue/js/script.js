const btn = document.querySelectorAll(".btn");
 const storeProduct = document.querySelectorAll(".card_content");

// for(i=0; i<btn.length ; i++){
//     btn[i].addEventListener("click" , (e) => {
//         e.preventDefault();
//         const filter = e.target.dataset.filter;
//         // console.log(filter);
//         storeProduct.forEach((product)=>{
//             if(filter == "Appliances") {
//                 product.style.display = "block";
//             }
//             else{
//                 if(product.classList.contains(filter)){
//                     product.style.display = "block";
//                 }else{
//                     product.style.display = "none";
    
//                 }
//             }
//         })
//     } )
// }

var my_Array = [
    {
        "id":1,
        "name": "Apple Watch Series 5",
        "price": 339.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id":2,
        "name": "Apple iPhone 11 (64GB, Black)",
        "price": 669.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id":3,
        "name": "Apple iMac 27-inch",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id":4,
        "name": "OneOdio A71 Wired Headphones",
        "price": 49.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id":5,
        "name": "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id":6,
        "name": "Switch Pro Controller",
        "price": 429.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    }
]

const search = document.getElementById("");
search.addEventListener("keyup" , (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();
    for(i = 0 ; i < storeProduct.length ; i++){
        if(storeProduct[i].classList.contains(searchValue)){
            storeProduct[i].style.display = "block";
        }
        else if(searchValue == ""){
            storeProduct[i].style.display = "none";
        }
    }
})