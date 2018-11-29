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
	    height: .75rem;
	    border-bottom: 1px solid #1a1f25;
	    margin: 0 auto .5rem;
	    font-size: .25rem;
	}
	.sign-form>input[type=text]:last-of-type{
		margin-bottom: 1.75rem;
	}
	.sign-form>input[type=button]{
	    width: 5.5rem;
	    height: .85rem;
	    background-color: #1a1f25;
	    color: #fff;
	    font-size: .28rem;
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
	  				<!-- @focus='handleTyping'
						@blur='cancelTyping'  -->
	  				<input v-for='(ipt,index) in login' 
	  					:key='index' 
	  					:type='ipt.Type' 
	  					:placeholder="ipt.Placeholder" 
	  					:value='ipt.Value'
	  					>
	  			</div>
	  		</van-tab>
			<van-tab class="fr" title="注册">
				<div class="sign-form">
	  				<input v-for='(ipt,index) in register' 
		  				:key='index' 
		  				:type='ipt.Type' 
		  				:placeholder="ipt.Placeholder" 
		  				:value='ipt.Value'
	  				>
	  			</div>
			</van-tab>
		</van-tabs>	


  	</div>
</template>
<script>
	// let interval = '';

	export default{

		data(){
			return{
				// selected:'selected'
				active:2,
				login:[
					{Type:'text',Placeholder:'请输入你的账号',Value:''},
					{Type:'text',Placeholder:'请输入你的密码',Value:''},
					{Type:'button',Placeholder:'',Value:'登录'},
				],
				register:[
					{Type:'text',Placeholder:'请输入你的账号',Value:''},
					{Type:'text',Placeholder:'请输入你的密码',Value:''},
					{Type:'text',Placeholder:'请再次输入你的密码',Value:''},
					{Type:'text',Placeholder:'请输入你的邮箱',Value:''},
					{Type:'button',Placeholder:'',Value:'注册'},
				],
				interval:''
			}
		},
		metaInfo: {
			title:'lokep--sign',
			meta:[
				{
					name:'apple-mobile-web-app-status-bar-style',
					content:'black'
				}
			]
		},
		methods:{
			// handleTyping(){
			// 	const that = this;
			// 	this.interval = setInterval(function(){
   //              	that.$options.methods.scrollToEnd();
			// 	}, 500);
				
			// },
			// cancelTyping(){
			// 	clearInterval(this.interval);
			// },
			// scrollToEnd() {
		 //        // document.body.scrollTop = document.body.scrollHeight;
		 //        //bug
		 //        let sh = document.body.scrollHeight
		 //        document.body.scrollTop = document.body.scrollHeight-50+'px';
		 //    }

		},
		mounted(){
			// this.$toast('提示文案');用于登录注册时的错误提示
		}
	}
</script>