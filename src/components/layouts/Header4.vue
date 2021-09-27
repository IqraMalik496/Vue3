<template>
<!-- Header -->
            <header class="header header-four">
                <nav class="navbar navbar-expand-lg header-nav">
                    <div class="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span class="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <router-link to="/index" class="navbar-brand logo">
                            <img src="@/assets/img/footer-logo.png" class="img-fluid" alt="Logo">
                        </router-link>
                    </div>
                   <!--  <div class="main-menu-wrapper">
                        <div class="menu-header">
                            <router-link to="/index" class="menu-logo">
                                <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
                            </router-link>
                            <a id="menu_close" class="menu-close" href="javascript:void(0);">
                                <i class="fas fa-times"></i>
                            </a>
                        </div>
                        
                        <ul class="main-nav">
                            <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                            <a href="#">Home <i class="fas fa-chevron-down"></i></a>
                           
                           <ul class="submenu" >
                               <li :class="currentPath == 'index' || currentPath == 'index-page' ? 'active' : 'notactive'"><router-link to="/index">Home</router-link></li>
                               <li :class="currentPath == 'index-1' ? 'active' : 'notactive'"><router-link to="/index-1">Home 1</router-link></li>
                               <li :class="currentPath == 'index-2' ? 'active' : 'notactive'"><router-link to="/index-2">Home 2</router-link></li>
                               <li :class="currentPath == 'index-3' ? 'active' : 'notactive'"><router-link to="/index-3">Home 3</router-link></li>
                               <li :class="currentPath == 'index-4' ? 'active' : 'notactive'"><router-link to="/index-4">Home 4</router-link></li>
                               <li :class="currentPath == 'index-5' ? 'active' : 'notactive'"><router-link to="/index-5">Home 5</router-link></li>
                               <li :class="currentPath == 'index-7' ? 'active' : 'notactive'"><router-link to="/index-7">Home 6</router-link></li>
                               <li :class="currentPath == 'index-8' ? 'active' : 'notactive'"><router-link to="/index-8">Home 7</router-link></li>
                               <li :class="currentPath == 'index-6' ? 'active' : 'notactive'"><router-link to="/index-6">Home 8</router-link></li>
                           </ul>
                            </li>
                           <li class="has-submenu" :class="doctorMenu ? 'active' : 'notactive'">
                           <a href="#">Doctors <i class="fas fa-chevron-down"></i></a>
                               <ul class="submenu">
                                   <li :class="currentPath == 'doctor-index' ? 'active' : 'notactive'"><router-link to="/doctor/index">Doctor Dashboard</router-link></li>
                                   <li :class="currentPath == 'doctor-appointments' ? 'active' : 'notactive'"><router-link to="/doctor/appointments">Appointments</router-link></li>
                                   <li :class="currentPath == 'schedule-timings' ? 'active' : 'notactive'"><router-link to="/doctor/schedule-timings">Schedule Timing</router-link></li>
                                   <li :class="currentPath == 'my-patients' ? 'active' : 'notactive'"><router-link to="/doctor/patients">Patients List</router-link></li>
                                   <li :class="currentPath == 'patient-profile' || currentPath == 'add-prescription' || currentPath == 'edit-prescription' || currentPath == 'add-billing' || currentPath == 'edit-billing' ? 'active' : 'notactive'"><router-link to="/doctor/patient-profile">Patients Profile</router-link></li>
                                   <li :class="currentPath == 'messages' ? 'active' : 'notactive'"><router-link to="/doctor/messages">Chat</router-link></li>
                                   <li :class="currentPath == 'invoices' ? 'active' : 'notactive'"><router-link to="/doctor/invoices">Invoices</router-link></li>
                                   <li :class="currentPath == 'profile-settings' ? 'active' : 'notactive'"><router-link to="/doctor/profile-settings">Profile Settings</router-link></li>
                                   <li :class="currentPath == 'doctor-reviews' ? 'active' : 'notactive'"><router-link to="/doctor/reviews">Reviews</router-link></li>
                                   <li :class="currentPath == 'doctor-register' ? 'active' : 'notactive'"><router-link to="/doctor/register">Doctor Register</router-link></li>
                                   <li class="subdrop-menu" v-if="currentPath != 'patient-profile'" :class="currentPath == 'doctor-blogs' || currentPath == 'edit-blog' || currentPath == 'blog-details' || currentPath == 'add-blog'  ? 'has-submenu active' : 'has-submenu notactive'">
                                    <a href="#">Blog</a> 
                                    -->
                                    <!-- <router-link to="/doctor/blogs">Blog</router-link> -->
                                       <!--
                                       <ul class="submenu">
                                           <li :class="currentPath == 'doctor-blogs' || currentPath == 'edit-blog' ? 'active' : 'notactive'"><router-link to="/doctor/blogs">Blog</router-link></li>
                                           <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/doctor/blog-details">Blog view</router-link></li>
                                           <li :class="currentPath == 'add-blog' ? 'active' : 'notactive'"><router-link to="/doctor/add-blog">Add Blog</router-link></li>
                                       </ul>
                                   </li>
                               </ul>
                            </li> 
                              <li class="has-submenu"  :class="patientsMenu ? 'active' : 'notactive'">
                           <a href="#">Patients <i class="fas fa-chevron-down"></i></a>
                           <ul class="submenu">
                               <li class="has-submenu subdrop-menu" :class="currentPath == 'doctor-mapgrid' || currentPath == 'doctor-maplist' ? 'active' : 'notactive'">
                                   <a href="#">Doctors</a>
                                   <ul class="submenu">
                                       <li :class="currentPath == 'doctor-mapgrid' ? 'active' : 'notactive'"><router-link to="/doctor/map-grid">Map Grid</router-link></li>
                                       <li :class="currentPath == 'doctor-maplist' ? 'active' : 'notactive'"><router-link to="/doctor/map-list">Map List</router-link></li>
                                   </ul>
                               </li>
                               <li :class="currentPath == 'search-doctor' ? 'active' : 'notactive'"><router-link to="/doctor/search">Search Doctor</router-link></li>
                               <li :class="currentPath == 'doctor-profile' ? 'active' : 'notactive'"><router-link to="/doctor/profile">Doctor Profile</router-link></li>
                               <li :class="currentPath == 'booking' ? 'active' : 'notactive'"><router-link to="/patient/booking">Booking</router-link></li>
                               <li :class="currentPath == 'checkout' ? 'active' : 'notactive'"><router-link to="/patient/checkout">Checkout</router-link></li>
                               <li :class="currentPath == 'booking-success' ? 'active' : 'notactive'"><router-link to="/patient/booking-success">Booking Success</router-link></li>
                               <li :class="currentPath == 'patient-dashboard' ? 'active' : 'notactive'"><router-link to="/patient/index">Patient Dashboard</router-link></li>
                               <li :class="currentPath == 'favourites' ? 'active' : 'notactive'"><router-link to="/patient/favourites">Favourites</router-link></li>
                               <li :class="currentPath == 'chat' ? 'active' : 'notactive'"><router-link to="/patient/chat">Chat</router-link></li>
                               <li :class="currentPath == 'patient-profile-settings' ? 'active' : 'notactive'"><router-link to="/patient/profile">Profile Settings</router-link></li>
                               <li :class="currentPath == 'patient-change-password' ? 'active' : 'notactive'"><router-link to="/patient/change-password">Change Password</router-link></li>
                           </ul>
                            </li>
                            <li class="has-submenu" :class="pharmacyMenu ? 'active' : 'notactive'"  v-if="currentPath != 'index-1' && currentPath != 'index-2' && currentPath != 'index-3'">
                            <a href="#">Pharmacy <i class="fas fa-chevron-down"></i></a>
                            <ul class="submenu">
                                <li :class="currentPath == 'pharmacy' ? 'active' : 'notactive'" ><router-link to="/pharmacy/index">Pharmacy</router-link></li>
                                <li :class="currentPath == 'pharmacy-details' ? 'active' : 'notactive'"><router-link to="/pharmacy/details">Pharmacy Details</router-link></li>
                                <li :class="currentPath == 'pharmacy-search' ? 'active' : 'notactive'"><router-link to="/pharmacy/search">Pharmacy Search</router-link></li>
                                <li :class="currentPath == 'pharmacy-product' ? 'active' : 'notactive'"><router-link to="/pharmacy/product">Product</router-link></li>
                                <li :class="currentPath == 'pharmacy-product-description' ? 'active' : 'notactive'"><router-link to="/pharmacy/product-description">Product Description</router-link></li>
                                <li :class="currentPath == 'pharmacy-cart' ? 'active' : 'notactive'"><router-link to="/pharmacy/cart">Cart</router-link></li>
                                <li :class="currentPath == 'pharmacy-product-checkout' ? 'active' : 'notactive'"><router-link to="/pharmacy/product-checkout">Product Checkout</router-link></li>
                                <li :class="currentPath == 'pharmacy-payment-success' ? 'active' : 'notactive'"><router-link to="/pharmacy/payment-success">Payment Success</router-link></li>
                            </ul>
                            </li>
                             <li class="has-submenu" :class="pagesMenu ? 'active' : 'notactive'">
                           <a href="#">Pages<i class="fas fa-chevron-down"></i></a>
                           
                           <ul class="submenu" :class="currentPath == 'invoices' || currentPath == 'invoice-view'   ? 'has-submenu active' : 'has-submenu notactive'">
                               <li :class="currentPath == 'voice-call' ? 'active' : 'notactive'"><router-link to="/voice-call">Voice Call</router-link></li>
                               <li :class="currentPath == 'video-call' ? 'active' : 'notactive'"><router-link to="/video-call">Video Call</router-link></li>
                               <li :class="currentPath == 'doctor-search' ? 'active' : 'notactive'"><router-link to="/doctor/search">Search Doctors</router-link></li>
                               <li :class="currentPath == 'calendar' ? 'active' : 'notactive'"><router-link to="/calendar">Calendar</router-link></li>
                               <li :class="currentPath == 'componentss' ? 'active' : 'notactive'"><router-link to="/components">Components</router-link></li>
                               <li class="has-submenu subdrop-menu" :class="currentPath == 'invoices' || currentPath == 'invoice-view' ? 'active' : 'notactive'">
                                   -->
                                   <!-- <router-link to="/doctor/invoices">Invoices</router-link> -->
                                  <!--
                                   <a href="#">Invoices</a>
                                   <ul class="submenu">
                                       <li :class="currentPath == 'invoices' ? 'active' : 'notactive'"><router-link to="/doctor/invoices">Invoices</router-link></li>
                                       <li :class="currentPath == 'invoice-view' ? 'active' : 'notactive'"><router-link to="/invoice-view">Invoice View</router-link></li>
                                   </ul>
                               </li>
                               <li :class="currentPath == 'blank' ? 'active' : 'notactive'"><router-link to="/blank">Starter Page</router-link></li>
                               <li :class="currentPath == 'logins' ? 'active' : 'notactive'"><router-link to="/login">Login</router-link></li>
                               <li :class="currentPath == 'patient-register' ? 'active' : 'notactive'"><router-link to="/patient/register">Register</router-link></li>
                               <li :class="currentPath == 'forgot-password' ? 'active' : 'notactive'"><router-link to="/forgot-password">Forgot Password</router-link></li>
                           </ul>
                            </li>
                            <li class="has-submenu" :class="blogMenu ? 'active' : 'notactive'">
                           <a href="#">Blog <i class="fas fa-chevron-down"></i></a>
                           <ul class="submenu">
                               <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><router-link to="/doctor/blog-list">Blog List</router-link></li>
                               <li :class="currentPath == 'blog-grid'  ? 'active' : 'notactive'"><router-link to="/doctor/blog-grid">Blog Grid</router-link></li>
                               <li :class="currentPath == 'blog-details'  ? 'active' : 'notactive'"><router-link to="/doctor/blog-details">Blog Details</router-link></li>
                           </ul>
                            </li>
                            <li class="has-submenu">
                           <a href="#">Admin <i class="fas fa-chevron-down"></i></a>
                           <ul class="submenu">
                               <li><router-link to=""  @click.native="dashboard(1)" >Admin</router-link></li>
                               <li><router-link to="" @click.native="dashboard(2)">Pharmacy Admin</router-link></li>
                           </ul>
                            </li>-->
                            <!-- <ul class="main-nav">
                            <li class="login-link">
                                <router-link to="/login">Login / Signup</router-link>
                            </li>                           
                            <li class="nav-item">
                                <router-link class="nav-link header-login" to="/login"><i class="fas fa-user-circle"></i> login / Signup </router-link>
                            </li>
                        </ul>         
                    </div>-->
                </nav>
            </header>
            <!-- /Header -->
</template>
<script>

export default {
  
        mounted() {
			var $wrapper = $('.main-wrapper');
            $('.main-nav a').on('click', function(e) {
                    if($(this).parent().hasClass('has-submenu')) {
                        e.preventDefault();
                    }
                    if(!$(this).hasClass('submenu')) {
                        $('ul', $(this).parents('ul:first')).slideUp(350);
                        $('a', $(this).parents('ul:first')).removeClass('submenu');
                        $(this).next('ul').slideDown(350);
                        $(this).addClass('submenu');
                    } else if($(this).hasClass('submenu')) {
                        $(this).removeClass('submenu');
                        $(this).next('ul').slideUp(350);
                    }
                });
              
            $('body').append('<div class="sidebar-overlay"></div>');
            $(document).on('click', '#mobile_btn', function() {
                $wrapper.toggleClass('slide-nav');
                $('.sidebar-overlay').toggleClass('opened');
                $('html').addClass('menu-opened');
                $('#task_window').removeClass('opened');
                return false;
            });
            
            $(document).on('click', '#menu_close', function() {
                $('html').removeClass('menu-opened');
                $('.sidebar-overlay').removeClass('opened');
                $('main-wrapper').removeClass('slide-nav');
            });
           $('.main-nav ul li:not(.submenu) a').click(function(){
            $("html").removeClass('menu-opened');         
            $(".sidebar-overlay").removeClass('opened');
        });

    	},
        computed: {
       currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index' || this.$route.name == 'index-5'   || this.$route.name == 'index-6'        || this.$route.name == 'index-8'     || this.$route.name == 'index-7'  || this.$route.name == 'index-1' || this.$route.name == 'index-page' ||  this.$route.name == 'index-2' ||  this.$route.name == 'index-3' ||  this.$route.name == 'index-4';
       },
       doctorMenu() {
           return this.$route.name == 'doctor-index' || this.$route.name == 'doctor-appointments' || this.$route.name == 'schedule-timings' ||  this.$route.name == 'my-patients' ||  this.$route.name == 'messages'  ||  this.$route.name == 'profile-settings' ||  this.$route.name == 'doctor-reviews' ||  this.$route.name == 'doctor-register' ||  this.$route.name == 'doctor-blogs' ||  this.$route.name == 'edit-blog' ||  this.$route.name == 'blog-details' ||  this.$route.name == 'add-blog' ||  this.$route.name == 'add-prescription' ||  this.$route.name == 'edit-prescription' ||  this.$route.name == 'add-billing' ||  this.$route.name == 'edit-billing' ||  this.$route.name == 'patient-profile';
       },
       patientsMenu() {
           return this.$route.name == 'doctor-mapgrid' || this.$route.name == 'doctor-maplist' || this.$route.name == 'doctor-profile' || this.$route.name == 'search-doctor' ||  this.$route.name == 'booking' ||  this.$route.name == 'booking-success' ||  this.$route.name == 'checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'patient-profile-settings' ||  this.$route.name == 'patient-change-password';
       },
       pharmacyMenu() {
           return this.$route.name == 'pharmacy' || this.$route.name == 'pharmacy-details' || this.$route.name == 'pharmacy-search' || this.$route.name == 'pharmacy-product' ||  this.$route.name == 'pharmacy-product-description' ||  this.$route.name == 'pharmacy-cart' ||  this.$route.name == 'pharmacy-product-checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'pharmacy-payment-success';
       },
       pagesMenu() {
           return this.$route.name == 'voice-call' || this.$route.name == 'video-call' || this.$route.name == 'calendar' || this.$route.name == 'componentss' || this.$route.name == 'invoice-view' || this.$route.name == 'logins' || this.$route.name == 'blank' || this.$route.name == 'patient-register' || this.$route.name == 'doctor-register' || this.$route.name == 'invoices' || this.$route.name == 'forgot-password';
       },
       blogMenu() {
            return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details';
        }
    },
    methods: {
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/pharmacyadmin/index'});
               window.open(router.href, '_blank');
           }
       }
   }
}
</script>