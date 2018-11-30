<style>
	.footer{
		position: fixed;
		left: 0;
		right: 0;
		margin: auto;
		bottom: 0;
		z-index: 10;
		background-color: #fff;
		height: 1.05rem;
	}
	.footer-row{
		width: 7.2rem;
		margin: 0 auto;
		height: 1.05rem;
	}
	.footer .footer-link{
		line-height: 1.15rem;
		font-size: .6rem;
		color: #c2c2c2;
	}
	.footer .router-link-active{
		color: #000;
	}
	.footer i{
		color: inherit;
		font-size: inherit;
		line-height: inherit;
	}
</style>
<template>
	<div class="footer">
		<van-row class="footer-row">
		  	<van-col span="6">
		  		<router-link class="footer-link" to='/' exact>
		  			<i class="fa fa-home"></i>
		  		</router-link>
		  	</van-col>
		  	<van-col span="6">
		  		<router-link class="footer-link" to='/movie'>
		  			<i class="fa fa-camera" style="font-size: .475rem"></i>
		  		</router-link>
		  	</van-col>
		  	<van-col span="6">
		  		<router-link class="footer-link" to='social'>
		  			<i class="fa fa-compass"></i>
		  		</router-link>	
		  		
		  	</van-col>
		  	<van-col span="6">
		  		<router-link class="footer-link" to='/user'>
		  			<i class="fa fa-user"></i>
		  		</router-link>	
		  		
		  	</van-col>
		</van-row>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},

	}
</script>