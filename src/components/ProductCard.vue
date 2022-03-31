<template>
  <div className="card">
    <div className="image">
      <img :src="this.pro.img" alt="" />
    </div>
    <div class="price-product">
        <div style="color: orange">
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        </div>
        <p>${{' ' + this.pro.price }}</p>
    </div>
    <h5>{{ this.pro.name }}</h5>
    <p class="product-discription">{{ this.pro.discription }}</p>
    <div className="card-actions">
      <button class="wishlistBtn">
        <span style="color: red">
          <fa icon="heart" />
        </span>
        {{ " " }}
        Wishlist
      </button>
      <button class="cart-btn">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['pro']
};
</script>
