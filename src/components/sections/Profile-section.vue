<template>
    <div class="container-fluid mb-5 ">
					<div class="jumbotron bg-white px-5 pt-4 pb-3">
						<div class="row align-items-center  mb-2">
							<div class="col col-sm-12 col-md-6">
								<div class="media">
                                <img class="mr-3 proimg1" src="@/assets/img/profile.png" alt="Generic placeholder image">
                                <div class="media-body align-self-center">
                                    <div class="d-flex  ">
                                         <router-link to="/user-profiles"><h3 mt-0 ><strong>Steve Barnett</strong></h3> </router-link>
									 </div>
                                
                        
                                    <div class="media ">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <img src="@/assets/img/usaimg.jpg" alt="" class="usaimg1">
                                            </a> 
                                        
                                        </div>
                                        <div class="media-body align-self-end">
                                            <h6><strong > United State of America</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>  
							</div>
							<div class="col-12 col-sm-12 col-md-6 ">
								<div class="d-flex flex-wrap align-items-center justify-content-start justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end">
									<div class="media  d-sm-block d-md-none">
                                        <div class="d-flex">
                                            <a class="pr-3 " href="#">
                                                <h2 class="mt-0 text-primary"><strong>$ 324</strong></h2>
                                                </a> 
                                        </div>
                                        <div class="media-body align-self-end ">
                                            <p mt-0><small>/ Price Lesson</small></p>
                                        </div>
                                    </div>
									<div>
                                    	<a href="#" class="far fa-heart text-grey text-xlg m-0 px-3 pb-3 d-none d-sm-none d-md-block"></a> 
                                	</div>
									<div class="d-flex flex-row mb-3  align-items-center">
										<a href="#" class="fab fa-vimeo-v icon-left mx-1 text-white rounded-circle bg-info " style="padding: 10px"></a>
										<a href="#" class="fas fa-play icon-left mx-1 text-white rounded-circle bg-success " style="padding: 10px"></a>
										<a href="#" class="fab fa-youtube icon-left mx-1 text-white rounded-circle bg-warning " style="padding: 10px"></a>
										<div class="p-2 "><small>+ See More</small></div>
                            		</div>
									<div>
										<button class="btn btn-primary btn-lg d-none d-sm-none d-md-block d-lg-block d-xlg-block">Book Your Free Trial</button>
									</div>
								</div>
								
							</div>
							
							
						</div>
						<div class="row d-block d-md-none">
							<div class="col icon-leftt">
								<span class="">
									<div class="">
									<a href="#" class="fas fa-play-circle"></a>
									</div>	
								</span>
							</div>
						</div>
						
						 <div class="row ">
							<div class="col-12 col-sm-12 col-md-9 ">
								<div class="d-flex  flex-wrap " style="">
									 
									<div class="card-deck d-none d-sm-none d-md-block d-lg-block d-xl-block ">
										<div class="card bg-white">
											<div class="card-body text-center">
												<h6><small>Price Lesson</small></h6>
												<p class="custom-heading">$ 324</p>
											</div>
										</div>
									</div>
									<div class="card-deck">
										<div class="card bg-light">
											<div class="card-body ">
												<div><h6><small>Age</small></h6></div>
												<div style="display">
													<h6 ><img src="@/assets/img/man.png" alt="" class="info-avatar" >24 Years</h6>
												</div>
											</div>
										</div>
									</div>

									<div class="card-deck">
										<div class="card bg-light">
											<div class="card-body ">
												<div><h6><small>Lesson Conduct</small></h6></div>
												<div style="display">
													<h6 ><img src="@/assets/img/book.png" alt="" class="info-avatar" >317</h6>
												</div>
											</div>
										</div>
									</div>

									<div class="card-deck">
										<div class="card bg-light">
											<div class="card-body ">
												<div><h6><small>Acceptance Rate</small></h6></div>
												<div>
													<h6 ><img src="@/assets/img/like.png" alt="" class="info-avatar" >98%</h6>
												</div>
											</div>
										</div>
									</div>

									<div class="card-deck">
										<div class="card bg-light">
											<div class="card-body ">
													<div><h6><small>Active Status</small></h6></div>
												<div style="display">
													
													<h6 ><img src="@/assets/img/computer.png" alt="" class="info-avatar" >Online</h6>
												</div>
										
											</div>
										</div>
									</div>	
								</div>
							</div>
							<div class="col-12 col-sm-12 col-md-3 d-none d-sm-none d-md-block">
								<span class="float-right">
									<div class="icon-left2">
									<a href="#" class="fas fa-play-circle"></a>
									</div>	
								</span>
							</div>
						</div>	 
						
						<div class="row">
							<div class="col">
								<h3>
									<strong>Description</strong>
								</h3>
								<p style="color: #9A9A9A">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Suspendisse sollicitudin rhoncus aliquet. 
									Sed dapibus metus malesuada, sodales arcu sed, lobortis dui. 
									Aenean erat nibh, pellentesque imperdiet interdum et, cursus in libero.
									 Vestibulum non odio ultrices ante blandit aliquam in non nisl.
									  Phasellus ipsum dui, pharetra vel finibus et, volutpat ut risus. 
									  Phasellus congue libero in nunc euismod commodo at et turpis. 
								</p>
							</div>
						</div>
						<div class="d-flex  justify-content-center  ">
							
							<button class="btn btn-primary btn-lg btn-block d-block d-sm-block d-md-none d-lg-none d-xl-none">Book Your Free Trial</button>
							</div>				
					</div>	
					
				</div>
</template>