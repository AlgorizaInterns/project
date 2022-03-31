<template>
  <nav>
    <!-- <router-link to="/">Home</router-link>  -->
  </nav>
  
  <router-view/>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background:#f8f8f8;
}

#app {
  font-family: Montserrat,Helvetica,Arial,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
