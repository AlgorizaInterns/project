<template>
  <div class="overlay" 
  :class="{show : showSideBar || showFilters, showF : showFilters}" @click.self="showSideBar = false ; showFilters = false;">
  </div>
  <ecommerce
    :darkTheme="darkTheme"
    :showSideBar="showSideBar"
    :screen="screen"
    :showFilters = "showFilters"
    @toggleFilters="toggleFilters"
  />
  <navBar
    :darkTheme="darkTheme"
    :showSideBar="showSideBar"
    @changeTheme="changeTheme"
    @toggleSideBar="toggleSideBar"
  />
  <side-bar
    :darkTheme="darkTheme"
    :showSideBar="showSideBar"
    :screen="screen"
    @toggleSideBar="toggleSideBar"
  />
</template>

<script>
import sideBar from "./components/sideBar.vue";
import navBar from "./components/nav.vue";
import ecommerce from "./components/ecommerce.vue";

export default {
  name: "App",
  data() {
    return {
      darkTheme: false,
      showSideBar: false,
      showFilters:false,
      screen: window.innerWidth
    };
  },
  created() {
    window.addEventListener("resize", this.changeScreen);
  },
  components: {
    sideBar,
    navBar,
    ecommerce,
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    changeScreen() {
      this.screen = window.innerWidth;
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
.overlay{
  position: fixed;
  width: 100%;
  height:100%;
  background:rgba(0,0,0,0);
  transition: all .4s;
  z-index:10;
  visibility: hidden;
}
.show{
  visibility:visible;
  background:rgba(34,41,47,.5);
}
.showF{
  background: rgba(34,41,47,.2);
}
</style>
