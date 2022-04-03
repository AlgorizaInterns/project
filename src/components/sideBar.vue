<template>
  <aside :class="{ darkSide: darkTheme }" :style="{'left': (screen > 1200 || showSideBar )? '0' : '-260px'}">
    <header>
      <div class="logo">
          <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" alt="">
          <h1>Vuexy</h1>
      </div>
      <div v-show="screen > 1200" class="dot">
          <!-- v-show="screen >= 1200" -->
          <svg height="20" width="22" >
               <circle cx="8" cy="10" r="7"  stroke-width="2"  stroke="#7367f0" fill="transparent"/>
               <circle cx="8" cy="10" r="3"  stroke-width="2"  stroke="#7367f0" fill="transparent"/>
          </svg>
      </div>
      <div v-show="screen <= 1200" class="close" @click="$emit('toggleSideBar')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#7367f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block d-xl-none feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div>
    </header>
    <main>
        <div class="list" v-for="lists in lists" :key="lists.listName">
            <h3 class="cat" v-if="lists.listName" >{{lists.listName}}</h3>
            <ul>
            <li v-for="list in lists.list" :key="list.name">
                <div class="head">
                    <div class="smooth">
                        <div class="name">
                            <div v-html="list.icon"></div>
                            <h3 class="list-name">{{list.name}}</h3>
                        </div>
                        <div class="count" v-if="list.notifications">
                            <span>{{list.notifications}}</span>
                        </div>
                    </div>
                    <img   :id="list.name + 'img'" @click="rotate(list.miniList.length,list.name)" v-if="list.miniList.length" src="../assets/list.svg" alt="">
                </div>
                <ul class="ul" v-if="list.miniList.length"  :id="list.name +'ul'">
                    <li class="mini" v-for="miniList in list.miniList" :key="miniList">
                        <svg height="20" width="12">
                            <circle cx="8" cy="13" r="3"  stroke-width="1"  stroke="#7367f0" fill="transparent"/>
                        </svg>
                        <h3 class="list-name">{{miniList}}</h3>
                    </li>
                </ul>
            </li>
            </ul>
        </div>
    </main>
  </aside>
</template>

<script>
export default {
    props:['darkTheme','showSideBar',"screen"]
    ,data(){
        return {
            lists : [
            {
                listName:"",
                list:[
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
                        name:"Dashboards",
                        notifications:2,
                        miniList:["test"]
                    }
                ]
            },
            {
                listName:"APPS&PAGES",
                list:[
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
                        name:"Email",
                        notifications:0,
                        miniList:["test"]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
                        name:"Chat",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
                        name:"Todo",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
                        name:"Calender",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
                        name:"Invoice",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
                        name:"eCommerce",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
                        name:"User",
                        notifications:0,
                        miniList:[]
                        
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`,
                        name:"Pages",
                        notifications:0,
                        miniList:[]
                    },
                ]
            },
            {
                listName:"USER INTERFACE",
                list:[
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`,
                        name:"Typography",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
                        name:"Colors",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
                        name:"Feather",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
                        name:"Cards",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`,
                        name:"Components",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
                        name:"Extensions",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
                        name:"Page Layouts",
                        notifications:0,
                        miniList:[]
                    }
                ]
            },
            {
                listName:"FORMS & TABLES",
                list:[
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
                        name:"Forms elements",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
                        name:"From layout",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
                        name:"From Wizard",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
                        name:"From Validation",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
                        name:"From Repeater",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
                        name:"BS Table",
                        notifications:0,
                        miniList:[]
                    },
                    {
                        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
                        name:"Good Table",
                        notifications:0,
                        miniList:[]
                    }
                ]
            },
            ],
            flag : true,
        }
     },
     methods:{
        rotate(length,name){
           if(this.flag){
                document.getElementById(`${name + 'ul'}`).style.height = `${length * 30}px`;
                document.getElementById(`${name + 'img'}`).style.transform = `rotate(90deg)`;
           }else{
                document.getElementById(`${name + 'ul'}`).style.height = `0px`;
                document.getElementById(`${name + 'img'}`).style.transform = `rotate(0deg)`;
           }
           this.flag = !this.flag;
        }
     },
}
</script>

<style lang="scss">
.darkSide{
    background: #283046;
    svg{
        stroke: #d0d2d6;
    }
    .list-name{
        color: #d0d2d6!important;
    }

}
aside{
    transition: width .2s;
    background: #ffffff;
    position: fixed;
    width: 230px;
    height: 100%;
    left:0;
    padding:24px 15px 0px 15px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    transition:left .2s;
}
header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    .logo{
        width: 130px;
        img{
            width: 36px;
            margin-left: 8px;
        }
        h1{
            display: inline-block;
            margin: 0;
            margin-left: 14px;
            color:#7367f0;
            transform: translateY(-5px);
            font-size: 21px;
        }
    }
}
main{
    width: 100%;
    height: 92%;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0;
    }
    h3{
        margin: 0;
        color: #565360be;
        font-weight: 100;
        display: inline-block;
    }
    ul{
        list-style-type: none;
        padding: 0;
        svg{
            margin: 0px 13px;
        }
        h3{
            transform: translateY(-10px);
        }
        li{
            padding:10px;
            .head{
                display: flex;
                justify-content: space-between;
                .smooth{
                    display: flex;
                    justify-content: space-between;
                    width:90%;
                    transition: transform .3s;
                    cursor: pointer;
                    &:hover{
                         transform: translateX(6px);
                    }
                    .count{
                        width: 20px;
                        height: 20px;
                        background: rgba(255,159,67,.12);
                        border-radius: 50%;
                        text-align: center;
                        transform: translateY(-10px);
                        span{
                           color: #ff9f43;
                        }
                    }
                    .name{
                        display: flex;
                    }
                }
            }
            svg{
                transform: scale(1.4) translateY(-6px) translateX(-3px);
                stroke: #565360c9;
            }
            img{
                width: 20px;
                margin-top: -20px;
                cursor: pointer;
                transition: transform .5s;
            }
            .mini{
                padding-left: 0;
            }
        }
    }
    .cat{
        padding-left:12px;
        color: #56536094;
        font-size: 14px;
    }
    .list{
        .ul{
            height: 0;
            overflow: hidden;
            transition: height .5s;
        }
    }
}
@media screen and (max-width:1200px){
    aside{
        left:-22%;
        z-index:99;
    }
}
</style>