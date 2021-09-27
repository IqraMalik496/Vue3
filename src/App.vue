<template>
  <div id="app">
    <loader></loader>
   <router-view :key="$route.fullPath"> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // beforeCreate() {
  //     this.$nextTick(function () {
  //         if(window.location.pathname.includes("admin")) {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://doccure-vue.dreamguystech.com/template/static/css/AdminStyle.css';
  //           head.appendChild(link);
  //           }  else if(window.location.pathname.includes("pharmacyadmin"))  {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss1";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://doccure-vue.dreamguystech.com/template/static/css/PharmacyAdminStyle.css';
  //           head.appendChild(link);
  //           }  else  {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss2";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://doccure-vue.dreamguystech.com/template/static/css/style.css';
  //           head.appendChild(link);
  //         }
  //     })
  //   },
}
</script>


