<template>
  <header>
    <div class="breadcrumb-container">
      <div class="title">
        <h2>Shop</h2>
      </div>
      <div class="breadcrumb">
        <ol>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-text-top feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>
          </li>
          <li class="breadcrumb-item">
            <a href="">
              ECommerce
            </a>
          </li>
          <li class="breadcrumb-item">
            <span>
              Shop
            </span>
          </li>
        </ol>
      </div>
    </div>
    <div class="settings-button">
      <button><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>
    </div>
  </header>
</template>

<script>
  export default {
    name:"HeaderSection",
  }
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .breadcrumb-container{
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    .title{
      h2{
        border-right: 1px solid #d6dce1;
        font-weight: 500;
        font-size: 1.714rem;
        padding-right: 1rem;
        line-height: 1.2;
      }
    }
    .breadcrumb{
      @media screen and (max-width: 650px){
        display: none;
      }
      ol{
        display: flex;
        align-items: center;
        padding: 0.3rem 1rem;
        flex-wrap: wrap;
        font-size: 1rem;
        .breadcrumb-item{
          display: flex;
          padding-left: 0.5rem;
          &:before{
            content: url("../assets/arrow.svg");
            width: 13px;
            height: 13px;
            margin-right: 0.5rem;
          }
        }
        a{
          color: $purple-main;
        }
      }
    }
  }
  .settings-button{
    background-color: $purple-main;
      border-radius: 0.358rem;

    button{
      cursor: pointer;
      border: none;
      color: $bg-items;
      background-color: transparent;
      padding: 0.85rem 0.83rem 0.66rem 0.83rem;
    }
  }
}
</style>