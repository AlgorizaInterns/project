<template>
  <TopNav/>
  <SideNav/>
  <div class="main-container">
    <HeaderSection/>
    <MainSection/>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import HeaderSection from "../components/HeaderSection.vue"
import TopNav from "../components/TopNav.vue"
import MainSection from "../components/MainSection.vue"

  export default {
    name:'HomePage',
    components: {
      SideNav,
      HeaderSection,
      TopNav,
      MainSection,
    },
  }
</script>

<style lang="scss" scoped>
.main-container{
  margin-left: 260px;
  padding: 7.75rem 2rem 0;
  @media screen and (max-width: 650px){
    padding: 6.95rem 1.2rem 0 1.2rem
  }
  @media screen and (max-width: 1200px){
    margin-left: 0px;
  }
}
</style>