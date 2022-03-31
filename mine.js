var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var alldata ; 
var http = new  XMLHttpRequest();//1

http.open( "GET" , "./store-demo-data.json")//2

http.send();//3

//4
http.addEventListener("readystatechange" , function(){

    if(  http.readyState == 4 && http.status ==200   )
    {
      alldata=  JSON.parse(http.response)   // string --> Array

        alldata = alldata.products;
      // console.log(alldata) //data
      DisplayData();
    }
    
})


function DisplayData()
{
    
    var allDivs = ``;

    for( var i=0; i <alldata.length ; i++ )
    {
        
        allDivs +=`
        
                        <div class="card">
                        <img class="img-fluid" style="width:100%" src="`+alldata[i].img+`"></img>
                        <div>
                        <h3>`+alldata[i].name+`</h3>
                        <div class="price">
                        <i style="color:#ff9f43!important" class="fa-solid fa-star"></i><i style="color:#ff9f43!important" class="fa-solid fa-star"></i><i style="color:#ff9f43!important" class="fa-solid fa-star"></i><i style="color:#ff9f43!important" class="fa-solid fa-star"></i><i style="color:#ff9f43!important" class="fa-regular fa-star"></i><p>$`+alldata[i].price+`</p></div>
                        <p class="description" >On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display.</p>
                        </div>
                        <p ><button class="wishbutton"><i class="fa-regular fa-heart"></i> Wishlist</button></p>
                        <p><button  class="cartbutton"><i class="fa fa-light fa-cart-shopping"></i> View In Cart</button></p>
                    </div>
    `
    }
 
    document.getElementById("datarow").innerHTML = allDivs;
   
}


// var radios = document.getElementsByName('filter');

// for (var i = 0;radios.length; i++) {
//  if (radios[i].checked==true) {

//    console.log(radios[i].value)
   
//   break;
//    }
// }

