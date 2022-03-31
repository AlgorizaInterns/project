let heading=document.getElementsByClassName('Accordion');
var i;
for(i=0 ; i<heading.length ;i++){
   heading[i].addEventListener('click',function(){
       this.classList.toggle('active');
      
       var dec=this.nextElementSibling;
       if(dec.style.maxHeight){
        dec.style.maxHeight=null
       }else{
        dec.style.maxHeight=dec.scrollHeight +'px  '
       }
   }) 
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("main-menu").style.top = "0";
  } else {
    document.getElementsByClassName("main-menu").style.top = "-50px";
  }
}
//////////////////////////////////////////////////////////

const products = document.querySelector(".grid-view");
const searchForProuduct = document.querySelector(".search-product");


function createCard(img, rating, price, productName, description) {
  let x = rating;
  var ratingMarkUP;
 
  if (x == 0) {
    ratingMarkUP = `
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    `;
  } else if (x == 1) {
    ratingMarkUP = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    `;
  } else if (x == 2) {
    ratingMarkUP = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    `;
  } else if (x == 3) {
    ratingMarkUP = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    `;
  } else if (x == 4) {
    ratingMarkUP = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star star-none-active"></i>
    `;
  } else {
    ratingMarkUP = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    `;
  }
  

  let code = `<div class="card">
  <div class="card-content">
    <img src="${img}" alt="img" />
    <div class="card-rating">
      <div class="card-star">
        ${ratingMarkUP}
      </div>
      <p class="price"><span>$</span>${price}</p>
    </div>
    <h5 class="product-name">${productName}</h5>
    <p class="description">${description}</p>
  </div>

  <div class="item-options">
    <div class="Wishlist"> <i class="bx bx-heart"></i> Wishlist </div>
    <div class="view-in-cart"> <i class="bx bx-cart"></i> View In Card </div>
  </div>
</div>`;

  products.innerHTML += code;
}

for (let i = 0; i < data.products.length; i++) {
  createCard(
    data.products[i].img,
    data.products[i].rating,
    data.products[i].price,
    data.products[i].name,
    data.products[i].discription
  );
}


searchForProuduct.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase();
  const filterProduct = data.products.filter((product) => {
    return product.name.toLowerCase().includes(searchInput); 
  });
  products.innerHTML = ``; 
  for (let i = 0; i < filterProduct.length; i++) {
    createCard(
      filterProduct[i].img,
      filterProduct[i].rating,
      filterProduct[i].price,
      filterProduct[i].name,
      filterProduct[i].discription
    );
  }
  if (searchInput == "") {
    products.innerHTML = ``; 
    for (let i = 0; i < data.products.length; i++) {
      createCard(
        data.products[i].img,
        data.products[i].rating,
        data.products[i].price,
        data.products[i].name,
        data.products[i].discription
      );
    }
  }
});