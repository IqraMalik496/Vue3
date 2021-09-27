<template>
<div class="main-wrapper">
       <!-- Header -->
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary" style="padding: 20px 145px">
                <router-link to="/profile" class="navbar-brand logo">
                    <img src="@/assets/img/footer-logo.png" class="img-fluid" alt="Logo">
                </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex bg-white rounded-pill align-items-center ">
                        
            <input type="text" class="form-control border-0 rounded-pill" placeholder="Search">
            <span class="fa fa-search form-control-feedback text-white bg-primary rounded-circle p-2 mx-2"></span>
        </form>
        
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        
        <h6 class="text-white pt-1 align-items-center" style="padding:6px 6px 0 10px">Filter</h6>
      </li>
        <li class="nav-item active d-flex px-3 pt-1 mx-1 bg-darkblue rounded-pill align-items-center">
        <div><img src="@/assets/img/star.png" alt="" class="info-avatar1" ></div>
        <div><h6 class="text-white pt-1" style="padding:0 2px">2</h6></div>
      </li>
        <li class="nav-item active d-flex px-3 pt-1 mx-1 bg-darkblue rounded-pill align-items-center ">
        <div><img src="@/assets/img/online-learning.png" alt="" class="info-avatar1" ></div>
        <div><h6 class="text-white pt-1" style="padding:0 2px">Yes</h6></div>
      </li>
      <li class="nav-item active d-flex px-3 pt-1 mx-1 bg-darkblue rounded-pill align-items-center ">
        <div><img src="@/assets/img/book.png" alt="" class="info-avatar1" ></div>
       <div><h6 class="text-white pt-1" style="padding:0 2px">Online</h6></div> 
      </li>
      <li class="nav-item d-flex px-3 pt-1 mx-1 bg-darkblue rounded-pill align-items-center ">
        <div><img src="@/assets/img/computer.png" alt="" class="info-avatar1" ></div>
        <div><h6 class="text-white pt-1" style="padding:0 2px">4.3</h6></div>
      </li>
    </ul>

    <div class="card-deck ">
                    <div class="card bg-darkblue rounded-pill">
                        <div class="card-body ">
                            <div class="d-flex d-row align-items-center justify-content-center ">
                                <img src="@/assets/img/star.png" alt="" class="info-avatar1" >
                                <h6 class="text-white pt-2"  style="padding:0 6px">4.5</h6>
                                <img src="@/assets/img/profile.png" alt="" class="info-avatar bg-white rounded-pill" >
                            </div>
                        </div>
                    </div>
                </div>
  </div>
    </nav>

    </header>
    <!-- /Header -->
    <!-- Page Content -->
    <div class="content mt-4 pb-4">
        <div class="container-fluid">
            <!-- jumbotron 1-->
            <div class="jumbotron bg-white px-md-5 pt-md-4 pb-md-3">
                <div class="d-none d-md-block ">
                    <!-- row 1 starts here-->
                    <div class="row">
                        <div class="col col md-9">
                            <!-- Media Section starts
                            it contains profile data-->
                            <div class="media">
                                <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                    <div class="d-flex flex-row ">
                                        <div>
                                            <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                        </div>
                                        
                                        
                                    
                                        <div style=" padding-top: 2px; padding-left: 8px">
                                            <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                        </div>  
                                        
                                    </div>
                                
                        
                                    <div class="media ">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                                <!-- <img class="usaimg1 " src="@/assets/img/usaimg.jpg" alt="Generic placeholder image"> -->
                                            </a> 
                                        
                                        </div>
                                        <div class="media-body align-self-end">
                                            <p mt-0><small>/ Price Lesson</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 
                                media section ends
                            -->
                            
                        </div>
                        
                        <div class="col col-md-3 p-0  ">
                            <div class="d-flex  flex-wrap justify-content-end align-items-center">
                                <div>
                                    <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                                </div>
                                <div>
                                    <router-link to="/profile" class="btn btn-primary ">Book Your Free Trial</router-link>
                                </div>
                             </div>	
                        </div>
                    </div> <!-- row 1 ends -->
                    <!-- row 2 starts -->
                    <div class="row mt-3 h-100">
                        <div class="col col-md-9 ">
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui. 
                                                                    
                                </p>
                            </div>
                            <div class="d-flex  flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col col-md-3 p-0 icon-left3">
                            <div class="justify-content-end align-items-center">
                                <div class="">
                                    <a href="#" class="fas fa-play-circle "></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <!--row 2 ends --> 
                    <!--row 3 starts -->  
                    <div class="row mt-3">
                        <div class="col col-md-9">
                            <div class="d-flex flex-row flex-wrap mb-3  align-items-center ">
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                        <div class="col col-md-3">	
                            <div class="d-flex flex-row flex-wrap mb-3 justify-content-end align-items-center">
                                <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                    </div>  
                    <!-- Row 3 ends -->
                </div>
                
                <div class=" d-sm-block d-md-none">
                    <!-- rows for resposive design starts here-->
                    <!-- row 1  responsive -->
                    <div class="d-flex  justify-content-between">
                        
                        <!-- Media Section starts
                        it contains profile data-->
                        
                        <div class="media">
                            <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                            <div class="media-body align-self-center">
                                
                                <div class="d-flex flex-row  mb-3  align-items-center">
                                    <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                    <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                    <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                    <small>+ See More</small>
                                </div>
                                    
                                <div class="d-flex flex-row ">
                                    <div>
                                        <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                    </div>
                                    <div style=" padding-top: 2px; padding-left: 8px">
                                        <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                    </div>     
                                </div>
                                
                    
                                
                                
                            </div>
                        </div>  
                    <div class="d-flex justify-content-end align-items-center">
                                    <div class="icon-left5">
                                        <a href="#" class="fas fa-play-circle "></a>
                                    </div>
                                </div>
                        
                    </div>
                    <!-- row 1  responsive ends here-->

                    <!-- row 2  responsive -->
                    <div class="row">
                        <div class="col">
                            <div class="media ">
                                <div class="d-flex">
                                    <a class="pr-3 mt-1 " href="#">
                                        <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                    </a> 
                                </div>
                                <div class="media-body align-self-end">
                                    <p mt-0><small>/ Price Lesson</small></p>
                                </div>
                            </div>
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui.                               
                                </p>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mb-3  align-items-center ">
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-2 col-sm-2 ">
                            <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                        </div>
                        <div class="col-10 col-sm-10 ">
                            <button class="btn  btn-primary  btn-lg btn-block  ">Book Your Free Trial</button>
                        </div>
                     </div>
                </div>
                    
            </div><!--jumbotron 1 ends-->  
            <!-- jumbotron 2-->
            <div class="jumbotron bg-white px-md-5 pt-md-4 pb-md-3">
                <div class="d-none d-md-block ">
                    <!-- row 1 starts here-->
                    <div class="row">
                        <div class="col col md-9">
                            <!-- Media Section starts
                            it contains profile data-->
                            <div class="media">
                                <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                    <div class="d-flex flex-row ">
                                        <div>
                                            <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                        </div>
                                        
                                        
                                    
                                        <div style=" padding-top: 2px; padding-left: 8px">
                                            <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                        </div>  
                                        
                                    </div>
                                
                        
                                    <div class="media ">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                                <!-- <img class="usaimg1 " src="@/assets/img/usaimg.jpg" alt="Generic placeholder image"> -->
                                            </a> 
                                        
                                        </div>
                                        <div class="media-body align-self-end">
                                            <p mt-0><small>/ Price Lesson</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 
                                media section ends
                            -->
                            
                        </div>
                        
                        <div class="col col-md-3 p-0  ">
                            <div class="d-flex  flex-wrap justify-content-end align-items-center">
                                <div>
                                    <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                                </div>
                                <div>
                                    <button class="btn btn-primary ">Book Your Free Trial</button>
                                </div>
                             </div>	
                        </div>
                    </div> <!-- row 1 ends -->
                    <!-- row 2 starts -->
                    <div class="row mt-3 h-100">
                        <div class="col col-md-9 ">
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui. 
                                                                    
                                </p>
                            </div>
                            <div class="d-flex  flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col col-md-3 p-0 icon-left3">
                            <div class="justify-content-end align-items-center">
                                <div class="">
                                    <a href="#" class="fas fa-play-circle "></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <!--row 2 ends --> 
                    <!--row 3 starts -->  
                    <div class="row mt-3">
                        <div class="col col-md-9">
                            <div class="d-flex flex-row flex-wrap mb-3  align-items-center ">
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                        <div class="col col-md-3">	
                            <div class="d-flex flex-row flex-wrap mb-3 justify-content-end align-items-center">
                                <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                    </div>  
                    <!-- Row 3 ends -->
                </div>
                
                <div class=" d-sm-block d-md-none">
                    <!-- rows for resposive design starts here-->
                    <!-- row 1  responsive -->
                    <div class="d-flex  justify-content-between">
                        
                        <!-- Media Section starts
                        it contains profile data-->
                        
                        <div class="media">
                            <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                            <div class="media-body align-self-center">
                                
                                <div class="d-flex flex-row  mb-3  align-items-center">
                                    <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                    <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                    <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                    <small>+ See More</small>
                                </div>
                                    
                                <div class="d-flex flex-row ">
                                    <div>
                                        <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                    </div>
                                    <div style=" padding-top: 2px; padding-left: 8px">
                                        <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                    </div>     
                                </div>
                                
                    
                                
                                
                            </div>
                        </div>  
                    <div class="d-flex justify-content-end align-items-center">
                                    <div class="icon-left5">
                                        <a href="#" class="fas fa-play-circle "></a>
                                    </div>
                                </div>
                        
                    </div>
                    <!-- row 1  responsive ends here-->

                    <!-- row 2  responsive -->
                    <div class="row">
                        <div class="col">
                            <div class="media ">
                                <div class="d-flex">
                                    <a class="pr-3 mt-1 " href="#">
                                        <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                    </a> 
                                </div>
                                <div class="media-body align-self-end">
                                    <p mt-0><small>/ Price Lesson</small></p>
                                </div>
                            </div>
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui.                               
                                </p>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mb-3  align-items-center ">
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-2 col-sm-2 ">
                            <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                        </div>
                        <div class="col-10 col-sm-10 ">
                            <button class="btn  btn-primary  btn-lg btn-block  ">Book Your Free Trial</button>
                        </div>
                     </div>
                </div>
                    
            </div><!--jumbotron 2 ends-->  
            <!-- jumbotron 3-->
            <div class="jumbotron bg-white px-md-5 pt-md-4 pb-md-3">
                <div class="d-none d-md-block ">
                    <!-- row 1 starts here-->
                    <div class="row">
                        <div class="col col md-9">
                            <!-- Media Section starts
                            it contains profile data-->
                            <div class="media">
                                <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                    <div class="d-flex flex-row ">
                                        <div>
                                            <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                        </div>
                                        
                                        
                                    
                                        <div style=" padding-top: 2px; padding-left: 8px">
                                            <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                        </div>  
                                        
                                    </div>
                                
                        
                                    <div class="media ">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                                <!-- <img class="usaimg1 " src="@/assets/img/usaimg.jpg" alt="Generic placeholder image"> -->
                                            </a> 
                                        
                                        </div>
                                        <div class="media-body align-self-end">
                                            <p mt-0><small>/ Price Lesson</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 
                                media section ends
                            -->
                            
                        </div>
                        
                        <div class="col col-md-3 p-0  ">
                            <div class="d-flex  flex-wrap justify-content-end align-items-center">
                                <div>
                                    <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                                </div>
                                <div>
                                    <button class="btn btn-primary ">Book Your Free Trial</button>
                                </div>
                             </div>	
                        </div>
                    </div> <!-- row 1 ends -->
                    <!-- row 2 starts -->
                    <div class="row mt-3 h-100">
                        <div class="col col-md-9 ">
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui. 
                                                                    
                                </p>
                            </div>
                            <div class="d-flex  flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col col-md-3 p-0 icon-left3">
                            <div class="justify-content-end align-items-center">
                                <div class="">
                                    <a href="#" class="fas fa-play-circle "></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <!--row 2 ends --> 
                    <!--row 3 starts -->  
                    <div class="row mt-3">
                        <div class="col col-md-9">
                            <div class="d-flex flex-row flex-wrap mb-3  align-items-center ">
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                        <div class="col col-md-3">	
                            <div class="d-flex flex-row flex-wrap mb-3 justify-content-end align-items-center">
                                <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                    </div>  
                    <!-- Row 3 ends -->
                </div>
                
                <div class=" d-sm-block d-md-none">
                    <!-- rows for resposive design starts here-->
                    <!-- row 1  responsive -->
                    <div class="d-flex  justify-content-between">
                        
                        <!-- Media Section starts
                        it contains profile data-->
                        
                        <div class="media">
                            <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                            <div class="media-body align-self-center">
                                
                                <div class="d-flex flex-row  mb-3  align-items-center">
                                    <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                    <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                    <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                    <small>+ See More</small>
                                </div>
                                    
                                <div class="d-flex flex-row ">
                                    <div>
                                        <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                    </div>
                                    <div style=" padding-top: 2px; padding-left: 8px">
                                        <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                    </div>     
                                </div>
                                
                    
                                
                                
                            </div>
                        </div>  
                    <div class="d-flex justify-content-end align-items-center">
                                    <div class="icon-left5">
                                        <a href="#" class="fas fa-play-circle "></a>
                                    </div>
                                </div>
                        
                    </div>
                    <!-- row 1  responsive ends here-->

                    <!-- row 2  responsive -->
                    <div class="row">
                        <div class="col">
                            <div class="media ">
                                <div class="d-flex">
                                    <a class="pr-3 mt-1 " href="#">
                                        <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                    </a> 
                                </div>
                                <div class="media-body align-self-end">
                                    <p mt-0><small>/ Price Lesson</small></p>
                                </div>
                            </div>
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui.                               
                                </p>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mb-3  align-items-center ">
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-2 col-sm-2 ">
                            <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                        </div>
                        <div class="col-10 col-sm-10 ">
                            <button class="btn  btn-primary  btn-lg btn-block  ">Book Your Free Trial</button>
                        </div>
                     </div>
                </div>
                    
            </div><!--jumbotron 3 ends--> 
            <!-- jumbotron 4-->
            <div class="jumbotron bg-white px-md-5 pt-md-4 pb-md-3">
                <div class="d-none d-md-block ">
                    <!-- row 1 starts here-->
                    <div class="row">
                        <div class="col col md-9">
                            <!-- Media Section starts
                            it contains profile data-->
                            <div class="media">
                                <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                    <div class="d-flex flex-row ">
                                        <div>
                                            <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                        </div>
                                        
                                        
                                    
                                        <div style=" padding-top: 2px; padding-left: 8px">
                                            <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                        </div>  
                                        
                                    </div>
                                
                        
                                    <div class="media ">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                                <!-- <img class="usaimg1 " src="@/assets/img/usaimg.jpg" alt="Generic placeholder image"> -->
                                            </a> 
                                        
                                        </div>
                                        <div class="media-body align-self-end">
                                            <p mt-0><small>/ Price Lesson</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 
                                media section ends
                            -->
                            
                        </div>
                        
                        <div class="col col-md-3 p-0  ">
                            <div class="d-flex  flex-wrap justify-content-end align-items-center">
                                <div>
                                    <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                                </div>
                                <div>
                                    <button class="btn btn-primary ">Book Your Free Trial</button>
                                </div>
                             </div>	
                        </div>
                    </div> <!-- row 1 ends -->
                    <!-- row 2 starts -->
                    <div class="row mt-3 h-100">
                        <div class="col col-md-9 ">
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui. 
                                                                    
                                </p>
                            </div>
                            <div class="d-flex  flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col col-md-3 p-0 icon-left3">
                            <div class="justify-content-end align-items-center">
                                <div class="">
                                    <a href="#" class="fas fa-play-circle "></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <!--row 2 ends --> 
                    <!--row 3 starts -->  
                    <div class="row mt-3">
                        <div class="col col-md-9">
                            <div class="d-flex flex-row flex-wrap mb-3  align-items-center ">
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                        <div class="col col-md-3">	
                            <div class="d-flex flex-row flex-wrap mb-3 justify-content-end align-items-center">
                                <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                <div class="p-2 "><small>+ See More</small></div>
                            </div>
                        </div>
                    </div>  
                    <!-- Row 3 ends -->
                </div>
                
                <div class=" d-sm-block d-md-none">
                    <!-- rows for resposive design starts here-->
                    <!-- row 1  responsive -->
                    <div class="d-flex  justify-content-between">
                        
                        <!-- Media Section starts
                        it contains profile data-->
                        
                        <div class="media">
                            <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                            <div class="media-body align-self-center">
                                
                                <div class="d-flex flex-row  mb-3  align-items-center">
                                    <a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
                                    <a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
                                    <a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
                                    <small>+ See More</small>
                                </div>
                                    
                                <div class="d-flex flex-row ">
                                    <div>
                                        <h3 mt-0 ><strong>Steve Barnett</strong></h3> 
                                    </div>
                                    <div style=" padding-top: 2px; padding-left: 8px">
                                        <i href="#" class="fas fa-shield-alt text-lg text-success"></i> 
                                    </div>     
                                </div>
                                
                    
                                
                                
                            </div>
                        </div>  
                    <div class="d-flex justify-content-end align-items-center">
                                    <div class="icon-left5">
                                        <a href="#" class="fas fa-play-circle "></a>
                                    </div>
                                </div>
                        
                    </div>
                    <!-- row 1  responsive ends here-->

                    <!-- row 2  responsive -->
                    <div class="row">
                        <div class="col">
                            <div class="media ">
                                <div class="d-flex">
                                    <a class="pr-3 mt-1 " href="#">
                                        <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                    </a> 
                                </div>
                                <div class="media-body align-self-end">
                                    <p mt-0><small>/ Price Lesson</small></p>
                                </div>
                            </div>
                            <div>
                                <p style="color: #9A9A9A">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse sollicitudin rhoncus aliquet. 
                                Sed dapibus metus malesuada, sodales arcu sed, lobortis dui.                               
                                </p>
                            </div>
                            <div class="d-flex flex-wrap">
                                <div class="card-deck ">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Feedback</small></h6>
                                            </div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/star.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">4.8</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Lesson Conduct</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/online-learning.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px" >317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Subject Code</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/book.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">317</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Active status</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/computer.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Online</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck">
                                    <div class="card bg-light">
                                        <div class="card-body ">
                                            <div><h6><small>Others</small></h6></div>
                                            
                                            <div class="d-flex d-row align-items-center">
                                                <img src="@/assets/img/list.png" alt="" class="info-avatar" >
                                                <h6 style="padding-left:4px">Stats</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row mb-3  align-items-center ">
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="px-3 py-2 border rounded mx-1">
                                    <img class=" proimg4" src="@/assets/img/clock.png" alt="Generic placeholder image">
                                    <small>8:20 - 9:00</small>
                                </div>
                                <div class="p-2 "><small>+ See More</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-2 col-sm-2 ">
                            <a href="#" class="far fa-heart text-grey text-xlg p-3"></a> 
                        </div>
                        <div class="col-10 col-sm-10 ">
                            <button class="btn  btn-primary  btn-lg btn-block  ">Book Your Free Trial</button>
                        </div>
                     </div>
                </div>
                    
            </div><!--jumbotron 4 ends-->   
        </div><!--container fluid ends-->
    </div><!--content  ends-->
</div> <!-- main wrapper -->
</template>

<script>


export default {
    data() {
        return {
            
        }
    }
}
</script>