<template>
  <div class="products" :class="{ darkProduct: darkTheme }">
      <div class="search">
        <input type="search" placeholder="Search Prodeuct" id="" @keyup= "search">
        <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted feather feather-search"><circle data-v-15eba8c6="" cx="11" cy="11" r="8"></circle><line data-v-15eba8c6="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
      <div class="product" >
          <div class="card" v-for="product in products" :key="product">
              <img :src="product.img" alt="">
              <div class="row">
                  <div class="rating">
                      <svg v-for="rate in product.rating" :key="rate" data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <svg v-for="rate in 5-product.rating" :key="rate" data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning white"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <div class="price">
                      <p>${{product.price}}</p>
                  </div>
              </div>
              <h4 class="des">
                {{product.name}}
              </h4>
              <a class="des down">
                {{product.discription}}
              </a>
              <div class="btn">
              <a class="wish">
                <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Wishlist</a>
              <a class="viewIn">
                <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-shopping-cart"><circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle><circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle><path data-v-15eba8c6="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                View in Cart</a>
              </div>
          </div>
      </div>
      <div class="page">
         <button class="arrow" :class="{ 'disabled' : curr == 1 }" @click="changePage(-1)">
            <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline data-v-15eba8c6="" points="15 18 9 12 15 6"></polyline></svg>
         </button>
         <div class="nums">
            <button class="num" v-for="num in length" :key="num" :id="num" @click = "currPage" :class="{ 'active-num' : curr == num }">{{num}}</button>
         </div>
         <button class="arrow" :class="{ 'disabled' : curr == length }" @click="changePage(1)">
            <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline data-v-15eba8c6="" points="9 18 15 12 9 6"></polyline></svg>
         </button>
      </div>
  </div>
  
</template>

<script>

export default {
  props:['main',"darkTheme"],
  data(){
      return{
          curr:1
      }
  },
  computed:{
    products(){
        return this.main.slice((this.curr-1) * 9, this.curr * 9);
    },
    length(){
        return Math.ceil((this.main.length/9));
    }
  },
  methods:{
    currPage($e){
        this.curr = $e.target.id;
    },
    search($e){
        this.$emit('search',$e.target.value);
    },
    changePage(inc){
        inc == 1 ? this.curr++ : this.curr--;
    }
  }
}
</script>

<style lang="scss" scoped>
.darkProduct{
    .search,input[type="search"],.card{
        background: #283046!important;
    }
    .wish{
        color: white !important;
        background: #161d31 !important;
        svg{
            stroke: white !important;
        }
    }
    .white{
        fill:transparent !important;
        stroke:rgba(255, 255, 255, 0.39)!important;
    }
    .price,.des{
        color: rgba(255, 255, 255, 0.651) !important;
    }
    button,.nums{
        background: #242b3d !important;
        color:#a1b3b1 !important;
    }

    .active-num{
        background: #7367f0 !important;
        color: white !important;
    }
}
.products{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    box-sizing: border-box;
    height: fit-content;
}
.search{
    width: 100%;
    height: 20px;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: 7px;
    padding:10px 20px;
    padding-right:15px;
    background: white;
    input[type = "search"]{
        &::-webkit-search-cancel-button{
            display:none;
        }
        width: 97%;
        border:0;
        &:focus{
            outline: 0;
        }
        &::placeholder{
           color:#5e587352;
        }
    }
    svg{
        stroke:#b9b9c3;
    }
}
.product{
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3,31.33%);
    column-gap: 3%;
    row-gap: 20px;
    margin-top:20px;
    .card{
        box-shadow:0 4px 24px 0 rgb(34 41 47 / 10%);
        height: fit-content;
        display: flex;
        flex-wrap:wrap;
        background: white;
        padding-top:50px;
        transition: transform .4s , box-shadow .4s;
        height: fit-content;
        &:hover{
            transform: translateY(-6px);
            box-shadow: 0 4px 25px 0 rgb(34 41 47 / 25%);
        }
        img{
            width: 100%;
        }
        .row{
            margin: 30px 20px 10px;
            width: 100%;
            display: flex;
            .rating svg{
                stroke:orange;
                fill:orange;
            }
            .text-warning.white{
                stroke:#b9b9c3;
                fill:white;
            }
            .rating{
                width: 100px;
                display: grid;
                grid-template-columns: repeat(5,1fr);
                justify-content: space-between;
                column-gap: 2px;
            }
            .price{
                width: 80%;
                p{
                    margin:0;
                    text-align: end;
                }
            }
        }
        .des{
            width: 100%;
            height: 18px;
            margin:5px 20px;
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
            color:#4d4c4e;
            font-weight: 500;
        }
        .des.down{
            font-size: .86rem;
            color:#6e6b7b;
        }
        .wish,.viewIn{
            width:100%;
            height: 30px;
            padding:5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor:pointer;
            svg{
                margin-right: 5px;
            }
        }
        .btn{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        .wish{
            background: #f6f6f6;
            &:hover{
                background: #e3e3e3;
            }
        }
        .viewIn{
            background: #7367f0;
            color:white;
        }
    }
}
.page{
    width:100%;
    display: flex;
    justify-content: center;
    margin:30px 0px;
    .arrow{
        width: 30px;
        height: 30px;
        border-radius:50%;
        border: 0;
        background: #f3f2f7;
        padding:0px;
        transition: color .3s, background-color .3s;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background: #7367f0;
            color: white;
        }
    }
    .disabled{
        pointer-events: none;
        color:rgba(0, 0, 0, 0.466);
    }
    .left{
        transform: rotate(180deg);
    }
    .nums{
        background: #f3f2f7;
        border-radius: 20px;
        margin: 0px 10px;
        height: fit-content;
        .num{
            color:rgba(0, 0, 0, 0.664);
            border:0;
            width: 30px;
            height: 30px;
            border-radius:50%;
            padding:8px 10px;
            box-sizing: border-box;
            cursor: pointer;
            text-align: center;
        }
        .active-num{
            background: #7367f0;
            color:white;
        }
    }
}

@media screen and (max-width: 992px) {
  .product {
    grid-template-columns: repeat(2,48.5%);
  }
  .products{
    width: 100%;
  }
  .wish,.viewIn{
    width: 50%!important;
  }
  .btn{
    flex-wrap:initial!important;
  }
}
@media screen and (max-width: 576px) {
  .product {
    grid-template-columns: repeat(1,98%);
  }
}
</style>