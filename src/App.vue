<template>
  <HomePage/>
</template>

<script>
import HomePage from './views/Home.vue'

export default {
  name: 'App',
  components: {
    HomePage
  },
  data() {
    return {
      msg: "new value"
    }
  },
}
</script>

<style lang="scss">

/* google font import */
/* -------------- */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
/* -------------- */

/* css reset - normalize */
/* ------------- */
html {
  box-sizing: border-box;
  font-size: 14px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

body{
  font-family: Montserrat,Helvetica,Arial,serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.45;
  color: $color-main;
  background-color: $bg-main;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
  color: $text-c-1;
}
/* ------------- */

</style>
