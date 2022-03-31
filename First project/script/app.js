
function myFunction(){
// console.log("i'm first")
const elements = document.querySelector('.sub-items');
elements.classList.toggle('show');
const arrow = document.querySelector('.arrow');
arrow.classList.toggle('arrow-down');
}


function secondFunction(){
  //console.log("i'm second")
  const elements = document.querySelector('.sub-items-two');
  elements.classList.toggle('show');
  const arrow = document.querySelector('.arrow-two');
  arrow.classList.toggle('arrow-down');
  }
  
  "use strict"
    
  fetch("./items.json").then(function(resp)
    {
      return resp.json();
    }).then(function(data){
      console.log(data);
    });


    const searchBar = document.getElementById('searchBar');
    let items =[]


    searchBar.addEventListener('keyup',(e)=>{
      console.log(e.target.value);
    });
  
    searchBar.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
  
      const filteredItems = items.filter((item) => {
          return (
              item.name.toLowerCase().includes(searchString) 
          );
      });
      displayItems(filteredItems);
  });
  




  const loadItems = async () => {
      try {
          const res = await fetch("./items.json");
          items = await res.json();
          displayItems(items);
      } catch (err) {
          console.log('err');
      }
  };
  
  const displayItems = (items) => {
      const htmlString = items
          .map((item) => {
              return `
              <div class="character">
                  <div>
                  <img src="${item.img}"></img>
                  </div>
                  <div>
                       <div class="item-rate"> 
                             <h3> Raiting: ${item.rating}</h3>
                             <h3> Price: ${item.price}$</h3>
                       </div>
                       <div class="item-disc">
                            <h2>${item.name}</h2>
                            <p>${item.discription}</p>.
                      </div>
              </div>
          </div>
          `;
          })
          .join('');
      itemsList.innerHTML = htmlString;

      document.getElementById("itemsLength").innerHTML =items.length +"results found"; 

  };
  
  loadItems();



//  fetch("./items.json").then(function(x)
   // {
   //   var rd1= document.getElementById("value1")
    //  var rd2= document.getElementById("value2")
   //   var rd3= document.getElementById("value3")
  //    var rd4= document.getElementById("value4")
 //     var rd5= document.getElementById("value5")
  
    //  return x.json();
   // }).then(function fn(newItems){
  //    let checkPrice=newItems.price;
  

//    });


