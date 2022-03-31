<template>
  <li class="card-container">
    <div class="product">
      <div class="product-img">
        <img :src="productImg" alt="" loading="lazy">
      </div>
      <div class="product-data">
        <div class="data-header">
          <div class="rating">
            <li v-for="index in productRating" :key="index">
              <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </li>
          </div>
          <div class="price">
            ${{ productPrice }}
          </div>
        </div>
        <div class="product-info">
          <a class="product-name">
            {{ productName }}
          </a>
          <div class="product-description">
            {{ productDescription }}
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <a class="secondary-btn">
          <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span>
            Wishlist
          </span>
        </a>
        <a class="primary-btn">
          <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-shopping-cart"><circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle><circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle><path data-v-15eba8c6="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span>
            View In Cart
          </span>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name:'ProductCard',
    props: {
      productName: {
        type: String,
      },
      productPrice: {
        type: Number,
      },
      productRating: {
        type: Number,
      },
      productImg: {
        type: String,
      },
      productDescription: {
        type: String,
      },
    },
  }
</script>

<style lang="scss" scoped>
.card-container{
  overflow: hidden;
  box-shadow: 0 4px 24px 0 $shadow-c;
  border-radius: 0.428rem;
  background-color: $bg-items;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover{
    box-shadow: 0 4px 25px 0 rgba(34, 41, 47, 0.25);
    transform: translateY(-5px);
  }
    .product{
    .product-img{
    padding-top: 0.5rem;
    }
    .product-data{
      padding: 1rem;
      .data-header{
        display: flex;
        justify-content: space-between;
        .rating{
          display: flex;
          gap: 3px;
          color: #ff9f43;
        }
        .price{
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
      }
      .product-info{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .product-name{
          color: $color-main;
          font-weight: 600;
          line-height: 1.2;
        }
        .product-description{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 0.2rem;
          font-size: .875rem;
          line-height: 1.5rem;
        }
      }
    }
    .buttons-container{
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      a{
        flex-grow: 1;
        cursor: pointer;
        border: 1px solid transparent;
        padding: 0.786rem 1.5rem;
        text-align: center;
      }
      .secondary-btn{
        background-color: $btn-secondary-c;
        &:hover{
          background-color: #e3e3e3;
          color: #2a2e30;
        }
        span{
          vertical-align: text-top;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1;
          color: #2a2e30;
        }
      }
      .primary-btn{
        background-color: $purple-main;
        color: $bg-items;
        span{
          vertical-align: text-top;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1;
        }
      }
    }
  }
}

</style>