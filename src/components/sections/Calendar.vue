<template>
    <div class="container-fluid my-5">
					<div class="row my-5">
						<div class="col ">
							<!-- 
								Heading  -->
							<div>
									<h1>
										Calendar
									</h1>
							</div>
							<div class="jumbotron bg-white  px-5">
								<!-- 
									Sub Heading
								-->
								<div class="d-flex flex-row justify-content-between">
										<div >
											<chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
										</div>
										<div  style="text-align: center">
											<h4>
												<strong style="color: #28899F">July 15, 2021 - July 22, 2021 (GMT+0500)</strong>
											</h4>
											<p>All times are listed in your local timezone</p>
										</div>
										<div >
											<chevron-right-icon size="1.5x" class=" float-right"></chevron-right-icon>
										</div>
								</div>
								<!-- 
									Table
								-->
								<div class="row">
									<div class="col table-responsive">
										<table class="table table-borderless tr-borderless table-gap">
											<thead>
											<tr>
												<th >(GMT + 0500)</th>
												<th>Thu - 7/15/2021</th>
												<th>Fri - 7/15/2021</th>
												<th>Sat - 7/15/2021</th>
												<th>Sun - 7/15/2021</th>
												<th>Mon - 7/15/2021</th>
											</tr>
											</thead>
											<tbody >
												<tr >
													<td class="bg-blue1">12:00 AM</td>
													<td class="bg-lightblue"></td>
													<td class="bg-lightblue"></td>
													<td class="bg-lightblue"></td>
													<td class="bg-success"></td>
													<td class="bg-lightblue"></td>
												</tr>
												<tr >
													<td class="bg-back">12:00 AM</td>
													<td class="bg-lightblue"></td>
													<td class="bg-success"></td>
													<td class="bg-success"></td>
													<td class="bg-lightblue"></td>
													<td class="bg-success"></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td class="bg-lightblue"></td>
													<td class="bg-success"></td>
													<td class="bg-lightblue"></td>
													<td class="bg-lightblue"></td>
													<td class="bg-success"></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
												<tr class="bg-back table-borderless">
													<td>12:00 AM</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
							
					</div>

				
				</div>
</template>
<script>
import { ChevronLeftIcon } from 'vue-feather-icons'

import { ChevronRightIcon  } from 'vue-feather-icons'
export default {
  components: {
    ChevronLeftIcon,
	ChevronRightIcon 

  }
}
</script>