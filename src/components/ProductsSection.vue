<template>
<div class="products-container">


  <!-- Filters -->
  <div class="filters-wrapper">
    <div class="filters-title">
      <h5>Filters</h5>
    </div>
    <div class="filters">

      <!-- Multi range -->
      <div class="multi-range">
        <h6>Multi Range</h6>
        <div class="filter-controls">
          <div class="radio-control">
            <input v-model="rangePrice" type="radio" name="range" id="all" value="all">
            <label for="all">All</label>
          </div>
          <div class="radio-control">
            <input v-model="rangePrice" type="radio" name="range" id="10" value="10">
            <label for="10">&lt;=$10</label>
          </div>
          <div class="radio-control">
            <input v-model="rangePrice" type="radio" name="range" id="10-100" value="10-100">
            <label for="10-100">$10 - $100</label>
          </div>
          <div class="radio-control">
            <input v-model="rangePrice" type="radio" name="range" id="100-500" value="100-500">
            <label for="100-500">$100 - $500</label>
          </div>
          <div class="radio-control">
            <input v-model="rangePrice" type="radio" name="range" id="500" value="500">
            <label for="500">&gt;=$500</label>
          </div>

        </div>
      </div>
      <!-- ----------- -->

      <!-- Price range -->
      <div class="price-range">
        <h6>Price Range > {{priceSlider}} $</h6>
        <div class="filter-controls">
          <div class="range-control">
            <input type="range" min="1" max="1000" name="price-range" id="price-range" v-model="priceSlider">
          </div>
        </div>
      </div>
      <!-- ----------- -->

      <!-- Categories -->
      <div class="categories">
        <h6>Categories</h6>
        <div class="filter-controls">
          
          <div class="radio-control">
            <input type="radio" name="category" id="appliances" value="appliances">
            <label for="appliances">Appliances</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="audio" value="audio">
            <label for="audio">Audio</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">Cameras & Camcorders</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="car-electronics" value="car-electronics">
            <label for="car-electronics">Car Electronics & GPS</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cell-phones" value="cell-phones">
            <label for="cell-phones">Cell Phones</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="computers" value="computers">
            <label for="computers">Computers & Tablets</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="health" value="health">
            <label for="health">Health, Fitness & Beauty</label>
          </div>

        </div>
      </div>
      <!-- ---------------- -->

      <!-- Brands -->
      <div class="brands">
        <h6>Brands</h6>
        <div class="filter-controls">

          <div class="radio-control">
            <input type="radio" name="category" id="appliances" value="appliances">
            <label for="appliances">Insignia™</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="audio" value="audio">
            <label for="audio">Samsung</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">Metra</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">HP</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">Apple</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">GE</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">Sony</label>
          </div>

          <div class="radio-control">
            <input type="radio" name="category" id="cameras" value="cameras">
            <label for="cameras">Incipio</label>
          </div>

        </div>
      </div>
      <!-- ---------------- -->

      <!-- Ratings -->
      <!-- <div class="ratings"><h6>Ratings</h6></div> -->
      <!-- -------------- -->

    </div>
  </div>


  <!-- ---------------- -->

  <section class="products-section">

    <!-- Products Header -->
    <div class="products-header">
      <div class="products-header-wrapper">
        <div class="products-text">
          27 results found
        </div>
        <ul class="burger-icon">
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </a>
          </li>
        </ul>
        <div class="products-control">
          <div class="drop-down" @click="isOpen = !isOpen">
            <button>{{ sortedBy }}</button>
            <ul :class="!isOpen && 'closed'" >
              <li @click="sortedBy = 'Featured'"><a>Featured</a></li>
              <li @click="sortedBy = 'Lowest'"><a>Lowest</a></li>
              <li @click="sortedBy = 'Highest'"><a>Highest</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="products-search">
        <div class="search-wrapper">
          <input type="text" v-model="searchValue" name="search" id="search-input" placeholder="Search Product">
          <div class="search-icon">
            <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted feather feather-search"><circle data-v-15eba8c6="" cx="11" cy="11" r="8"></circle><line data-v-15eba8c6="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------- -->

    <!-- Products grid -->
    <ul class="products-grid">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id"
        :productName="product.name"
        :productPrice="product.price"
        :productRating="product.rating"
        :productImg="product.img"
        :productDescription="product.discription"
      />
    </ul>
    <!-- ---------- -->

  </section>
</div>
</template>

<script>
import ProductCard from "./ProductCard.vue"

export default {
  name:'ProductsSection',
  components: {
    ProductCard,
  },
  data() {
    return {
      isOpen: false,
      searchValue: '',
      rangePrice: null,
      priceSlider:0,
      sortedBy: 'Featured',
      productsData: require('../data/storeProducts.json'),
    }
  },
  computed: {
    filteredProducts() {
      let tempProducts = this.productsData.products;

      // search input
      if (this.searchValue != '' && this.searchValue) {
        tempProducts = tempProducts.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }

      // Filter out by price range
      if (this.rangePrice){
        switch (this.rangePrice) {
          case "10":
            tempProducts = tempProducts.filter((item) => {
              return (item.price <= this.rangePrice)
            })
          break;

          case "10-100":
            tempProducts = tempProducts.filter((item) => {
              return (item.price <= 100 && item.price >= 10)
            })
            break;

          case "100-500":
            tempProducts = tempProducts.filter((item) => {
              return (item.price <= 500 && item.price >= 100)
            })
            break;

          case "500":
            tempProducts = tempProducts.filter((item) => {
              return (item.price >= this.rangePrice)
            })
            break;
        }
      }

      // Filter out by price range slider
      if (this.priceSlider){
        tempProducts = tempProducts.filter((item) => {
          return (item.price >= this.priceSlider)
        })
      }

      // sort products by price
      tempProducts = tempProducts.sort((a, b) => {
        if (this.sortedBy == 'Highest') {
          return b.price - a.price
        } else if(this.sortedBy == 'Lowest') {
          return a.price - b.price
        }
      })

      return tempProducts
    }
  },

}
</script>

<style lang="scss" scoped>
.products-container{
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: 260px 1fr;
  @media screen and (max-width: 990px){
    grid-template-columns: 1fr;
  }
  gap: 2rem;
  .filters-wrapper{
    .filters-title{
      margin-top: 0.9rem;
      margin-bottom: 1.6rem;
      h5{
        color: $text-c-2;
        font-size: 1rem;
        line-height: 1.2;
        font-weight: 500;
      }
    }
    .filters{
      background-color: $bg-items;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: rgba(34, 41, 47, 0.1) 0px 4px 24px 0px;
      border-radius: 0.428rem;
      h6{
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
        color: $text-c-2;
      }
      .radio-control{
        margin-bottom: 0.75rem;
        /* input{

        } */
        label{
          margin-left:0.5rem;
          cursor: pointer;
        }
      }
      .price-range{
        h6{
          margin-bottom: 1rem;
          margin-top: 2.5rem;
        }
        .range-control{
          input{
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 4px;
            border-radius: 5rem;
            background: $purple-main; 
            outline: none; 
            &::-webkit-slider-thumb{
              -webkit-appearance: none;
              appearance: none;
              width: 16px; 
              height: 16px;
              background: $bg-items;
              border: 2px solid $purple-main;
              border-radius: 50%;
              cursor: pointer;
            }
          }
        }
      }
      .categories{
        h6{
          margin-bottom: 1rem;
          margin-top: 2.5rem;
        }
      }
      .brands{
        h6{
          margin-bottom: 1rem;
          margin-top: 2.5rem;
        }
      }
    }
    @media screen and (max-width: 990px){
      display: none;
    }
  }
  .products-section{
    .products-header{
      width: 100%;
      .products-header-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        .products-text{
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.45;
          @media screen and (max-width: 990px){
            display: none;
          }
        }
        .burger-icon{
          display: none;
          @media screen and (max-width: 990px){
            display: block;
          }
        }
        .products-control{
          .drop-down{
            .closed{
              display: none;
              border: 1px solid red;
            }
            position: relative;
            button{
              position: relative;
              border: 1px solid #7367f0;
              background-color: transparent;
              padding: 0.786rem 1.5rem;
              padding-right: 3rem;
              border-radius: 0.358rem;
              color: #7367f0;
              font-weight: 500;
              font-size: 1rem;
              line-height: 1;
              font-family: inherit;
              cursor: pointer;
              &:after{
                content: url("../assets/arrow.svg");
                margin-right: 1rem;
                width: 16px;
                height: 16px;
                position: absolute;
                right: 1px;
                transform: rotate(90deg);
              }
              &:hover{
                background-color: rgba(115,103,240,.04);
              }
            }
            ul{
              z-index: 200;
              position: absolute;
              top: 0px;
              left: 0px;
              will-change: transform;
              transform: translate3d(-18px, 38px, 0px);
              margin-top: 0.5rem;
              background-color: $bg-items;
              box-shadow: 0 5px 25px rgba(34, 41, 47, 0.1);
              float: left;
              text-align: left;
              padding: 0.5rem 0;
              background-clip: padding-box;
              border: 1px solid rgba(34,41,47,.05);
              min-width: 10rem;
              font-size: 1rem;
              border-radius: 0.4rem;
              li{
                  padding: 0.65rem 1.28rem;
                  cursor: pointer;
                a{
                  width: auto;
                  clear: both;
                  text-align: inherit;
                  background-color: transparent;
                  font-weight: 400;
                  color: #6e6b7b;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
      .products-search{
        background-color: $bg-items;
        padding: 1rem;
        margin-bottom: 2rem;
        box-shadow: rgba(34, 41, 47, 0.14) 0px 2px 8px 0px;
        /* 0 2px 8px 0 rgb(34 41 47 / 14%) */
        border-radius: 0.428rem;
        .search-wrapper{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          input{
            border: none;
            font-family: inherit;
            opacity: 0.5;
            outline: none;
            width: 100%;
            &::placeholder{
              transition: all 0.4s ease;
            }
            &:focus{
              &::placeholder{
                padding-left: 0.5rem;
              }
            }
          }
        }
      }
    }
    .products-grid{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      @media screen and (max-width: 990px){
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (max-width: 575px){
        grid-template-columns: 1fr;
      }
    }

  }
}
</style>