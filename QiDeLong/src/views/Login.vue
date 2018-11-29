<style scoped>
	.login{

	}
	.logo{
		width: 100%;
		height: 5.4rem;
		background-color: #1a1f25;
	}
	.logo>img{
		margin: 2rem auto 0;
		width: 2.1rem;
		height: .74rem;
		-webkit-transition: margin-top .7s;
		transition: margin-top .7s;
	}
	.log-buttons{
		/*background-color: #1a1f25;*/
	}
	.log-buttons>span{
		width: 3.5rem;
		text-align: center;
		color: #b6b6b6;
		font-size: .4rem;
		line-height: 1.8;
	}
	.log-buttons>.login-button-active{
		color: #fff;
	}
	.sign-form{
		width: 5.6rem;
		margin: .7rem auto;
	}
	.sign-form>input[type=text]{
		width: 5.5rem;
		height: 1.05rem;
		/*-webkit-appearance:none;*/
		border-bottom: 1px solid #1a1f25;
		margin:0 auto .5rem;
		font-size: .3rem;
	}
	.sign-form>input[type=text]:last-of-type{
		margin-bottom: 1.75rem;
	}
	.sign-form>input[type=button]{
		width: 5.5rem;
		height: 1.05rem;
		background-color: #1a1f25;
		color: #fff;
		font-size: .36rem;
	}
</style>
<template>
  	<div class="login ov">
  		<div class="logo ov">
  			<img src="../assets/images/logo.png" alt="LOKEP">
  		</div>
  		<!-- <div>
  			<span class="fl login-button-active" :selected="selected" @click="switchMethods($event)">登录</span>
  			<span class="fr" @click="switchMethods($event)">注册</span>	
  		</div> -->
  		<van-tabs class="log-buttons ov" v-model="active">
	  		<van-tab class="fl" title="登录">
	  			<div class="sign-form">
	  				<input type="text" placeholder="请输入你的账号">
	  				<input type="text" placeholder="请输入你的密码">
	  				<input type="button" value="登录">
	  			</div>
	  		</van-tab>
			<van-tab class="fr" title="注册">
				<div class="sign-form">
	  				<input type="text" placeholder="请输入你的昵称">
	  				<input type="text" placeholder="请输入你的密码">
	  				<input type="text" placeholder="请再次输入你的密码">
	  				<input type="text" placeholder="请输入你的邮箱">
	  				<input type="button" value="注册">
	  			</div>
			</van-tab>
		</van-tabs>	
  	</div>
</template>
<script>
	export default{
		data(){
			return{
				// selected:'selected'
				active:2
			}
		},
		methods:{
			// switchMethods:function(e){
			// 	console.log(e);
			// }
			handleScroll(){
				
			}

		},
		mounted(){
			 window.addEventListener('scroll', this.handleScroll, true);
		}
	}
</script>

