<template>
<div class="header">
  <div class="header1">
<nav class="navbar">
   <a  class="toggle" href="#" target="_self" @click="openside"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
 <div class="nav-icons">
     <ul>
      <li><a  href="#"><svg data-v-1134b199="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect data-v-1134b199="" x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line data-v-1134b199="" x1="16" y1="2" x2="16" y2="6"></line><line data-v-1134b199="" x1="8" y1="2" x2="8" y2="6"></line><line data-v-1134b199="" x1="3" y1="10" x2="21" y2="10"></line></svg></a></li>
      <li><a  href="#"><svg data-v-1134b199="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path data-v-1134b199="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></a></li>
      <li><a  href="#"><svg data-v-1134b199="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path data-v-1134b199="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline data-v-1134b199="" points="22,6 12,13 2,6"></polyline></svg></a></li>
      <li><a  href="#"><svg data-v-1134b199="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline data-v-1134b199="" points="9 11 12 14 22 4"></polyline><path data-v-1134b199="" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></a></li>
      <li><a  href="#" class="star"><svg data-v-1134b199="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-warning feather feather-star"><polygon data-v-1134b199="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a></li>
      <li><a  href="#"></a></li>
 </ul>
 </div>
 <div class="nav-card">
   <ul class="nav1">
          <li>
         <a href="#"><img class="image" alt="logo" src="../assets/download.png">
         <span class="lang">English</span></a></li>
          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></a></li>
          <li><a href="#"><svg data-v-0e8a7f4f="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle><line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a></li>
          <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a></li>
          <li class="notfication"><a href="#"><svg data-v-a58fee00="" xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-shopping-cart"><circle data-v-a58fee00="" cx="9" cy="21" r="1"></circle><circle data-v-a58fee00="" cx="20" cy="21" r="1"></circle><path data-v-a58fee00="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span class="notify" >5</span></a></li>
         <li class="notfication"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-body feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span class="notify" style="background:#ea5455">6</span> </a></li>
      <li> <div class="nav2">
      <span style="margin-right:0.3rem"><h4>Jone Doe</h4>
           <p class="admin">admin</p></span>
     <a href="#"><img  alt="logo" src="../assets/13-small.d796bffd.png">
     </a> 
   </div></li>
   </ul>
  
 </div>
   
</nav>
</div>
</div>

<!-- ////////////////////////////////////////// -->
<div class="overlay" v-if="toggle">
    <div class="sidenav1" >

    <div class="brand">
     <div class="logo">
       <img alt="Vue logo" src="../assets/logo3.svg">
     <div class="brand-text">
       <h2> Vuexy </h2>
     </div>
    </div>
    
     <div class="brand_link">
     <a href="#" class="link" @click="closeSide"> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block d-xl-none feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
     </div>
    </div>
    <!-- ////////////////////////////////////////// end brand -->
    <div class="menu">
    <div class="dashboard">
       <ul>
       <li>
        <a href="#" class="dashboard_logo" @click="displayLinks"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
         <span>Dashboards</span>
          <span> 2 </span>
        </a>
     
       <ul  class="dashboard-links" v-if="flag"> 
        <li>
         <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg> 
         <span>ecommerce</span></a>
         </li>
         <li>
         <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg> 
         <span>Analytics</span></a>
         </li>
        </ul> 
       </li>  
     </ul>
    </div>
     
     <ul class="app_link">
       <li> <span>APP  &amp; PAGES</span> </li>
       <li class=""><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>Email</a></li>
       <li class=""><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>Details</a></li>
       <li class=""><a href="#" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>Todo</a></li>
       <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Calendar</a></li>
       <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Invoice</a></li>
       <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>ecommerce</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>User</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Pages</a></li>
      <li><span>User Interface</span></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>Typography</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>Colors</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>Feather</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>Cards</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>Components</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Extensions</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>Page Layouts</a></li>
       <li><span>Forms &amp; Tables</span></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Form elements</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Form Layout</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>Form Wizard</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>Form Validation</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>Form Repeater</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>BS Table</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>Cood Table</a></li>
      <li><span>Charts &amp; Maps</span></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Charts</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg> Leaflet</a></li>
      <li><span>OTHERS</span></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>Access Control</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>Menu Levels</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>Disabled Menu</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>Raise Subbort</a></li>
      <li class=""><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/calendar" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Documentation</a></li>
    </ul>
    </div>

    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
        toggle:false,
        // openvar:false,
    }
  },
    methods:{
      openside(){
             this.toggle=true;
         },
         closeSide(){
           this.toggle=false;
         }
    }
}
</script>

<style lang="scss">

.header1{
    position: relative;
    width:100%; 
    height:100px;
    overflow: hidden;
      display:flex;
     justify-content: center;
     align-items:center;
      z-index:1;
     // background:red;
}
.navbar {
   position: fixed;
   width: 80%;
   right: 1rem;
   background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   //overflow: hidden;
   border-radius:5px;
   height:60px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   z-index: 9;
   .toggle{
     display:none;
   }
   .nav-icons{
       width:40%;
      ul{
        display:flex;
        width:200px;
        height:40px;
        align-items:center;
        justify-content: space-between;
       li{
        .star{color: #ff9f43; }
        a {
           display: block;
           color: #565360;
           text-align: center;
           text-decoration: none;
       
           }
           a:hover {
         color: #ff9f43;
        } 
       }    
   }
   
    }   //end navbar icons
  .nav-card{
   //   background:#ff9f43;
      width:50%;
      height:50px;
      display:flex;
       align-items:center;
       justify-content:center;
       .nav1{
        display:flex;
       // background:#1b1917;
        width:100%;
        height:40px;
        justify-content:space-around;
        align-items:center;
        
        li{
            .image{
                width:22px;
                height:14px;
            }
             a {
             display:inline-block;
             color: #565360;
             text-align: center;
             text-decoration: none;
              .lang{
               display:inline-block;
              color: #565365;
              font-size:0.9rem;
              margin-left: 5px;
              }
             
           }
        }
        }
        .nav2{
         display:flex;
       // background:#1b1917;
          width:110px;
         font-size:0.9rem;
         line-height: 0.1rem;
         justify-content:space-around;
          align-items:center;
          color: #565365;
             img{  
           width:40px;
           height:40px;
           border-radius:50%;
             }
             .admin{
                     margin-left: 1.4rem;
             }
        }
  }
 
}
          
 .notfication{
   position: relative;
  .notify{
    position: absolute;
    top: -13px;
    left:9px;
    text-align: center;
    min-width: 1.429rem;
    min-height: 1.429rem;
    display: flex;
    justify-content: center;
    font-size: .786rem;
    line-height: 1.4rem;
    color:#fff;
    background:#7367f0;
    border-radius:10px;
 }
 }
         
  
///////////////////////////////////
.sidenav1 {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow-x: hidden;
  border-radius:5px;
  color:#565360 ;
  font-weight: 400;
 scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;
 overflow:hidden;;
}
.sidenav1::-webkit-scrollbar {
  width: 10px;
}
.sidenav1:hover {
   overflow-y: scroll;
}

.sidenav1::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.sidenav1::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background:#87858f;
}

ul{
  list-style: none;
}
/* Side navigation links */
.sidenav1 a {
  text-decoration: none; 
}

.brand img{
  width:40px;
}
.brand{
  display:flex;
  justify-content: space-around;
  //  background:#ddd;
}
.brand .logo{
    display:flex;
  }
  .brand .logo .brand-text{
    margin-left: 10px;
    color: #7367f0;
    font-weight: 600;
    letter-spacing: .01rem;
    font-size: 1rem;

  }
  .brand .brand_link{
  /* background:#ddd; */
    margin:auto 0
  }
  .brand .brand_link a{
     color: #7367f0;
     text-align: center;
  }
  /* /////////////////////////////////// end brand */
  .menu {
      
  .dashboard{
         ul{
        .dashboard_logo{
         color:#625f6e;
        span {
          font-size: 1rem;
        }
       span:last-child{
         width:25px;
         height:25px;
         display: inline-block;
         font-size: 0.8rem;
         line-height:1.5rem;
         text-align: center;
         color:#ff9f43;
         background:#ff9f431f;
         border-radius: 20px;
         margin-left: 1rem;
       }
        
           }   
        }
        
       .dashboard_logo svg{
        margin-right: 0.9rem;
        color:#565360 ;
           }
        }
   //////////////////////////////
        
    
    .dashboard-links {
     
       a{
          color:#625f6e ;
          
          display:block;
          margin-top: 0.8rem;
       }
        svg{
       margin-right: 0.6rem;
       margin-left: 0.6rem;  
        
    } 
    }
    .dashboard_logo{
      padding:1rem;
     display: inline-block;
    }
    .dashboard_logo:hover{
       background:#f0eff3;
     border-radius: 5px;
    }     
        
    
    // start app link///////////
     .app_link {
      li{
         color:#A6a4b0;
          font-size: 1rem;
          margin-bottom: 0.9rem;
        span{
          text-transform:uppercase;
          font-size: 0.8rem;
          margin-bottom: 10px;
          display:inline-block;
        }
         a{
         color:#625f6e ;
  
      svg{
      margin-right: 0.9rem; 
        color:#565360 ;
     }
      }
      }
      
     }
     }
.overlay {
  height: 100%;
  width: 100%;
  background:#5b58647a;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
////////////////////////////////////////////////////////////
  @media screen and (max-width: 950px) {
     .nav-icons{
       display:none;
     }
     .navbar{
    
      width:95%;
        right: 1rem;
      .toggle{
       display:block;
       margin-left:1rem;
     }
     }
    
     .nav-card{
       width:75% !important;
     }
   
}      
</style>