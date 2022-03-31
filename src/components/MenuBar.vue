<template>
  <div className="menu-bar">
    <div>
      <h2>Multi Range</h2>
      <div class="input-radio">
        <input type="radio" @change="onChangePrice" v-model="price" name="range" value="0" />
        <label>All</label>
      </div>
      <div class="input-radio">
        <input type="radio" @change="onChangePrice" v-model="price" name="range" value="1" />
        <label>{{ "<= $10" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" @change="onChangePrice" v-model="price" name="range" value="2" />
        <label>{{ "$10 - $100" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" @change="onChangePrice" v-model="price" name="range" value="3" />
        <label>{{ "$100 - $500" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" @change="onChangePrice" v-model="price" name="range" value="4" />
        <label>{{ ">= $500" }}</label>
      </div>
    </div>
    <div style="marginTop: 20px">
      <h2>Price Range</h2>
      <div class="input-range">
        <input type="range" max="100" min="0" step="1" />
      </div>
    </div>
    <div style="marginTop: 20px">
      <h2>Brands</h2>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="" />
        <label>All</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="apple" />
        <label>{{ "Apple" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="google" />
        <label>{{ "Google" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Philips" />
        <label>{{ "Philips" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Logitech" />
        <label>{{ "Logitech" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Nike" />
        <label>{{ "Nike" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Vankyo Store" />
        <label>{{ "Vankyo Store" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="3M" />
        <label>{{ "3M" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="TAS" />
        <label>{{ "TAS" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Adidas" />
        <label>{{ "Adidas" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Oculus" />
        <label>{{ "Oculus" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Hobo" />
        <label>{{ "Hobo" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Sony" />
        <label>{{ "Sony" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Bugani" />
        <label>{{ "Bugani" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Toshiba" />
        <label>{{ "Toshiba" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Tile" />
        <label>{{ "Tile" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Ronyes" />
        <label>{{ "Ronyes" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Willful" />
        <label>{{ "Willful" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="VicTsing" />
        <label>{{ "VicTsing" }}</label>
      </div>
       <div class="input-radio">
        <input type="radio" name="brand" @change="onChangeBrand" v-model="brand" value="Bose" />
        <label>{{ "Bose" }}</label>
      </div>
      
    </div>
       <div style="marginTop: 20px">
      <h2>Categories</h2>
      <div class="input-radio">
        <input type="radio" name="category" value="1" />
        <label>Appliances</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="2" />
        <label>{{ "Audio" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="3" />
        <label>{{ "Cameras & Camcorders" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="4" />
        <label>{{ "Car Electronics & GPS" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="5" />
        <label>{{ "Cell Phones" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="6" />
        <label>{{ "Computers & Tablets" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="7" />
        <label>{{ "Health, Fitness & Beauty" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="8" />
        <label>{{ "Office & School Supplies" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="9" />
        <label>{{ "TV & Home Theater" }}</label>
      </div>
      <div class="input-radio">
        <input type="radio" name="category" value="10" />
        <label>{{ "Video Games" }}</label>
      </div>
    </div>
    <div style="marginTop: 20px">
      <h2>Ratings</h2>
      <div class="ratings">
        <div>
        <span style="color:orange;">
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        </span>
        & UP
        </div>
        <div>160</div>
      </div>
      <div class="ratings">
        <div>
          <span style="color:orange;">
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        </span>
        & UP
        </div>
        <div>160</div>
      </div>
      <div class="ratings">
        <div>
        <span style="color:orange;">
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        </span>
        & UP
        </div>
        <div>160</div>
      </div>
      <div class="ratings">
        <div>
        <span style="color:orange;">
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        <fa icon="star" />
        </span>
        & UP
        </div>
        <div>160</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      brand:''
    }
  },
  methods: {
    onChangePrice() {
      this.$emit('fire',this.price)
    },
    onChangeBrand(){
      this.$emit('play',this.brand)
    }
  }
};
</script>
