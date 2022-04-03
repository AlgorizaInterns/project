<template>
  <nav :class="{ darkNav: darkTheme }">
    <div class="left">
      <a class="toggleSideBar" @click="$emit('toggleSideBar')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </a>
      <div class="icons">
        <a>
          <svg
            data-v-1134b199=""
            xmlns="http://www.w3.org/2000/svg"
            width="21px"
            height="21px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6e6b7b"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
          >
            <rect
              data-v-1134b199=""
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              ry="2"
            ></rect>
            <line data-v-1134b199="" x1="16" y1="2" x2="16" y2="6"></line>
            <line data-v-1134b199="" x1="8" y1="2" x2="8" y2="6"></line>
            <line data-v-1134b199="" x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </a>
        <a>
          <svg
            data-v-1134b199=""
            xmlns="http://www.w3.org/2000/svg"
            width="21px"
            height="21px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6e6b7b"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-square"
          >
            <path
              data-v-1134b199=""
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            data-v-1134b199=""
            xmlns="http://www.w3.org/2000/svg"
            width="21px"
            height="21px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6e6b7b"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path
              data-v-1134b199=""
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline data-v-1134b199="" points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a>
          <svg
            data-v-1134b199=""
            xmlns="http://www.w3.org/2000/svg"
            width="21px"
            height="21px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6e6b7b"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-square"
          >
            <polyline data-v-1134b199="" points="9 11 12 14 22 4"></polyline>
            <path
              data-v-1134b199=""
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            data-v-1134b199=""
            xmlns="http://www.w3.org/2000/svg"
            width="21px"
            height="21px"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-warning feather feather-star"
          >
            <polygon
              data-v-1134b199=""
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
        </a>
      </div>
    </div>
    <div class="right">
      <div class="profile">
        <img src="./../assets/profile.png" alt="" />
      </div>
      <div class="name">
        <h4>Jhon Doe</h4>
        <p>admin</p>
      </div>
      <div class="icon alert noti">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-body feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
      <div class="icon alert cart">
        <svg
          data-v-a58fee00=""
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-body feather feather-shopping-cart"
        >
          <circle data-v-a58fee00="" cx="9" cy="21" r="1"></circle>
          <circle data-v-a58fee00="" cx="20" cy="21" r="1"></circle>
          <path
            data-v-a58fee00=""
            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
          ></path>
        </svg>
      </div>
      <div class="icon">
        <svg
          data-v-0e8a7f4f=""
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle>
          <line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <div class="icon">
        <svg
          @click="$emit('changeTheme')"
          v-if="!darkTheme"
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg
          @click="$emit('changeTheme')"
          v-if="darkTheme"
          xmlns="http://www.w3.org/2000/svg"
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>
      <div class="lang">
        <img src="./../assets/eng.png" alt="" />
        <p>English</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["darkTheme"],
};
</script>

<style lang="scss">
.darkNav {
  background: #283046;
  svg {
    stroke: #d0d2d6 !important;
  }
  .feather-star {
    stroke: #ff9f43 !important;
  }
  h4 {
    color: #d0d2d6 !important;
  }
}
nav {
  display: flex;
  justify-content: space-between;
  width: 75%;
  padding: 10px 22px 10px 21px;
  background: white;
  border-radius: 0.4rem;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  position: fixed;
  top: 18px;
  right: 30px;
  box-sizing: border-box;
  transition: width 0.2s;
  .feather-star {
    stroke: #ff9f43;
  }
  .left {
    display: flex;
    padding-top: 11px;
    .icons {
      margin-left: 10px;
    }
    a{
      width: 10px;
      height: 10px;
      margin-right: 14px;
      svg {
        stroke: #777483;
      }
    }
    .feather-star {
      stroke: orange;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    .profile {
      width: 40px;
      img{
        width: 100%;
        border-radius: 50%;
        position: relative;
      }
      &::after {
        content: "";
        position: absolute;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        right: 21px;
        bottom: 12px;
        background: #28c76f;
        border: 1px solid white;
      }
    }
    .name {
      text-align: end;
      margin-right: 10px;
      margin-top: 8px;
      width: 77px;
      p,
      h4 {
        margin: 0;
      }
      h4 {
        color: #777483;
      }
      p {
        color: #a2a0aa;
        font-size: 13px;
      }
    }
    .icon {
      margin-right: 7px;
      margin-top: 10px;
      position: relative;
      width: 30px;
      height: 100%;
      cursor: pointer;
    }
    .noti {
      margin-right: 6px;
    }
    .alert {
      &::after {
        content: "6";
        color: white;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        width: 20px;
        height: 20px;
        background: #ea5455;
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: 0px;
      }
    }
    .cart {
      &::after {
        background: #7367f0;
        content: "5";
      }
    }
    svg {
      stroke: #777483;
    }
    .lang {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 82px;
      height: 100%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 22px;
        height: 14px;
      }
      p {
        margin: 0;
        color: #a2a0aa;
      }
    }
  }
}
.toggleSideBar {
  display: none;
}
@media screen and (max-width: 1200px) {
  nav {
    width: 93.3%;
  }
  .toggleSideBar {
    display: initial;
  }
}
@media screen and (max-width: 992px) {
  .icons {
    display: none;
  }
}
</style>