<template>
	
		
	<!-- Page Content -->
	
	<div class="container">
		
		<div class="row  justify-content-center">
			
			<div class="col-10 my-5 col-sm-10 col-md-6 col-lg-6 col-xl-6 ">
				
				<!-- Login Tab Content -->
				
					
					<div class="row align-items-center justify-content-center">
						<!-- <div class="col-md-7 col-lg-6 login-left">
							
							<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Doccure Login">	
						</div> -->
						<div class="shadow  bg-white rounded">
							
							<div class="col  jumbotron  bg-white ">
								<div class=" login-header text-center">
									<h4><strong>Book your Free Trial</strong> on display selected Slot data Time(local Time Zone)</h4>
								<img src="@/assets/img/profile.png" alt="" class="proimg3 ">
								</div>
								
									
								
								
								<form>
								
									<div class="form-row">
									
										<div class=" col-12 col-sm-6 col-md-6 form-group form-focus">
											
										<input type="text" class="form-control floating">
										<label class="focus-label" style=""><i class="fas fa-user-alt text-primary" style="padding-right:10px"></i>First Name</label>
										</div>
										
										<div class=" col-12 col-sm-6 col-md-6 form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Last Name</label>
										</div>
									</div>												
									<div class="form-group form-focus">
										<input type="email" class="form-control floating">
										<label class="focus-label"><i class="fas fa-envelope text-primary" style="padding-right:10px"></i>Email</label>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating">
										<label class="focus-label"><i class="fas fa-unlock-alt text-primary" style="padding-right:10px"></i> Password</label>
									</div>
									<div class="form-group form-check">
									<input type="checkbox" class="form-check-input" id="exampleCheck1">
									<label class="form-check-label" for="exampleCheck1"><small>I Agree on web Terms and Conditions</small></label>
									</div>
									<!-- <div class="text-right">
										<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
									</div> -->
									<router-link to="/user-profiles" class="btn btn-primary btn-block btn-lg login-btn" style="font-size: 12px" type="submit">Sign Up</router-link>
									<div class="row my-3 content-align-center">
									
									<div class="col-4 login-or" style="" >
										<span >Sign Up with</span>
									</div>
									<div class="col-8">
										<hr>
									</div>
									</div>
									 <!-- <router-link to="/foo">Go to Foo</router-link> -->
									<div class="row form-row social-login">
										<div class="col-4">
											<router-link to="/user-profiles" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i></router-link>
										</div>
										<div class="col-4">
											<router-link to="/profile" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i></router-link>
										</div>
										<div class="col-4">
											<router-link to="/profile" class="btn btn-twitter btn-block"><i class="fab fa-twitter mr-1"></i></router-link>
										
										</div>
										
									</div>
									
									<!-- <div class="text-center dont-have">Don’t have an account? <router-link to="/patient/register">Register</router-link></div> -->
								</form>
								</div>
							</div>
						</div>
						
			</div>
				<!-- /Login Tab Content -->	
		</div>
	</div>
		
	<!-- /Page Content -->
		
	
</template>

<script>
export default {
	methods: {
		loginPath() {
			this.$router.push('/index')
		}
	},	
}
</script>