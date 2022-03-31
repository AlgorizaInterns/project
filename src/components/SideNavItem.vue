<template>
  <li>
    <a @click="this.isClosed = !this.isClosed" :class="!isClosed && 'bg-gray arrow-down'">
      <div class="icon">
        <slot/>
      </div>
      <span>{{ itemText }}</span>
    </a>
    <ul :class="isClosed && 'closed'" class="submenu">
      <li class="subitem" v-for="item in itemsInside" :key="item">
        <a :class="item === 'Shop' && 'highlighted'">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: currentColor;transform: ;msFilter:;"><path d="M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"></path></svg>
          <span>{{ item }}</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name:"SideNavItem",
    created () {
      this.toggleClosed();
    },
    data() {
      return {
        isClosed: true,
      }
    },
    props: {
      isOpen:{
        type: String,
      },
      itemsInside: {
        type: Array,
      },
      itemText: {
        type: String,
      },
    },
    methods: {
      toggleClosed() {
        if (this.isOpen === "open") {
          this.isClosed = !this.isClosed;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

li{
  margin-top: 0.5rem;
  position: relative;
  white-space: nowrap;
  font-size: 1.1rem;
  cursor: pointer;
  .arrow-down{
    &:after{
      transform: rotate(90deg);
    }
  }
  a{
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin: 0 15px;
    padding: 10px 15px 10px 15px;
    &:hover{
      .icon,span{
      transform: translateX(6px);
      }
    }
    &:after{
      content: url("../assets/arrow.svg");
      width: 16px;
      height: 16px;
      position: absolute;
      right: 22px;
      transition: all 0.3s ease;
    }
    .icon{
      margin-right: 1.1rem;
    }
    span{
      white-space: nowrap;
      font-size: 1.1rem;
      font-weight: 400;
    }
    .icon,span{
      transition: all 0.5s ease;
    }
  }
  .bg-gray{
    background-color: $bg-light;
}
}
.submenu{
  .subitem{
    a{
      background-color: $bg-items;
      &:after{
        content: none;
      }
    }
    .highlighted{
      color: $bg-items;
      background-image: linear-gradient(118deg, rgb(115, 103, 240), rgba(115, 103, 240, 0.7));
      box-shadow: 0 0 10px 1px rgba(115,103,240,.7) ;
    }
  }
}
.closed{
  display: none;
}

</style>