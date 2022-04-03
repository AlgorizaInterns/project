<template>
  <div class="box" :class="{responsive : (screen < 992), darkFilters: darkTheme }" :style="{'left': showFilters ? '0' : '-260px'}">
    <div>
      <h4>Multi Range</h4>
      <div class="prices" @change="range">
        <input id="0:999999" name="price" type="radio" checked/>
        <label>All</label><br />
        <input id="0:10" name="price" type="radio" />
        <label>&#60;= $10</label><br />
        <input id="10:100" name="price" type="radio" />
        <label>$10 - $100</label><br />
        <input id="100:500" name="price" type="radio" />
        <label>$100 - $500</label><br />
        <input id="500:999999" name="price" type="radio" />
        <label>&#62;= $500</label><br />
      </div>
    </div>
    <div>
    <h4>Price Range</h4>
    <slider :min="3" :max="3"/>
    </div>
    <div>
      <h4>Categories</h4>
      <div class="prices cat" @change="changeCat">
        <div v-for="cat in cat" :key="cat">
            <input :id="cat" name="cat" type="radio" :checked="cat == 'all'"/>
            <label>{{cat}}</label><br />
        </div>
      </div>
    </div>
    <div>
      <h4>Brands</h4>
      <div class="prices cat" @change="changeBrand">
        <div v-for="brand in brands" :key="brand">
            <input :id="brand" name="brands" type="radio" :checked="brand == 'all'"/>
            <label>{{brand}}</label><br />
        </div>
      </div>
    </div>
    <div class="rate-container">
      <h4>Ratings</h4>
      <div class="rating">
          <div class="rate" v-for="(rating, index)  in rating" :key="rating">
              <div class="stars">
                    <svg v-for="rate in rating" :key="rate" data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg v-for="rate in 5 - rating" :key="rate" data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill-current text-warning white"><polygon data-v-15eba8c6="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>& up</span>
              </div>
              <p>{{ratings[index]}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from './../components/slider.vue';

export default {
  props:['ratings','screen','showFilters','darkTheme']
  ,data() {
    return {
        rating:[4,3,2,1],
        cat:["all","Appliances","Audio","Cameras & Camcorders","Car Electronics & GPS","Cell Phones","Computers & Tablets","Health, Fitness & Beauty","Office & School Supplies","TV & Home Theater","Video Games"],
        brands:["all","apple","Google","Philips","Logitech","Nike","Adidas","Sony","Toshiba"]
    };
  },
  methods: {
    range($e) {
      this.$emit(
        "range",
        $e.target.id.split(":")[0],
        $e.target.id.split(":")[1]
      );
    },
    changeCat($e){
      //  console.log($e.target.id);
    },
    changeBrand($e){
       this.$emit('changeBrand',$e.target.id);
    },
  },
  components:{slider}
};
</script>

<style lang="scss" scoped>
.darkFilters{
    background: #283046!important;
    h4,label,p{
        color:#b4b7bd!important;
    }
    span{
        color: #7367f0!important;
    }
    input[type="radio"]::after{
        background-color:#283046!important;
        content: "";
        width: 17px;
        height: 17px;
        border-radius: 50%;
        position: absolute;
    }
    input[type="radio"]:checked::after{
        background-color:#7367f0!important;
    }
    .white{
        fill:transparent!important;
        stroke:rgba(255, 255, 255, 0.39)!important;
    }
}
.box {
  width: 20%;
  background: white;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 20px;
  height: fit-content;
  h4 {
    margin: 0;
    color: #6e6e6e;
    font-weight: 400;
  }
  .prices {
    margin-top: 10px;
    input[type="radio"] {
      margin-bottom: 20px;
      margin-right: 10px;
      margin-left: 0;
      width: 15px;
      height: 1.2em;
    }
    label {
      color: #757575f3;
    }
  }
  .cat{
    label{
        font-size:14px;
    }
  }
  .rate-container{
    h4{
      margin-bottom:10px;
    }
    .rating{
        width: 100%;
    }
    .rate{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom:10px;
        .stars{
            width: 90%;
            span{
                color: rgba(0, 0, 0, 0.493);
                margin-left:4px;
                position: absolute;
            }
        }
    }
    p{
        margin:0;
        color:rgba(0, 0, 0, 0.678);
    }
    svg{
        fill:orange;
        stroke:orange;
    }
    .white{
        fill:white;
        stroke:rgba(0, 0, 0, 0.329);
    }
  }
}
.responsive{
   position: absolute;
   top:0;
   bottom:0;
   left:-230px;
   z-index:10;
   overflow-y: scroll;
   transition: left .4s;
   width: 222px;
}
</style>