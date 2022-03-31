<template>
  <aside class="sidenav-container">
    <div class="sidenav-header">
      <a href="#">
        <span>
          <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" alt="brand logo">
        </span>
        <h2>Vuexy</h2>
      </a>
    </div>
    <div class="sidenav-menu">
      <ul>
        <SideNavItem itemText="Dashboards" :itemsInside="dashboardsItems" isOpen="">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
        </SideNavItem>
        <SideNavItem itemText="eCommerce" :itemsInside="eCommerceItems" isOpen="open">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
        </SideNavItem>
      </ul>
    </div>
  </aside>
</template>

<script>
import SideNavItem from './SideNavItem.vue'

  export default {
    name:"SideNav",
    components: {
      SideNavItem,
    },
    data() {
      return {
        dashboardsItems: ["eCommerce","Analytics"],
        eCommerceItems: ["Shop","Details","Wishlist","Checkout"],
      }
    },
  }
</script>

<style lang="scss" scoped>

.sidenav-container{
  z-index: 2000;
  position: fixed;
  height: 100%;
  overflow: hidden;
  background-color: $bg-items;
  width: 260px;
  transition: .4s cubic-bezier(.25,.8,.25,1),background 0s;
  box-shadow: 0 0 15px 0 $shadow-c;
  .sidenav-header{
    margin-top: 1.35rem;
    padding: 0.35rem 1rem 0.3rem 1.64rem;
    a{
      display: flex;
      text-decoration: none;
      img{
        max-width: 36px;
      }
      h2{
        color: #7367f0;
        font-weight: 600;
        letter-spacing: .01rem;
        font-size: 1.45rem;
        padding-left: 1rem;
      }
    }
  }
  @media screen and (max-width: 1200px){
    display: none;
  }
}
</style>