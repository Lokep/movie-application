<style>
	.home-search{
		width: 6.4rem;
		margin: 0 auto;
		font-size: .25rem;
		border-bottom: 1px solid #b6b6b6;
	}
	.home-search>input{
		width: 5rem;
		height: .8rem;
		line-height: .36rem;
		font-size: .28rem;
	}
	.home-search-icon{
		margin:.3rem .2rem 0 0;
	}
</style>
<template>
	<div class="home-search ov" @click="homeRedirect">
		<input :readonly='readOnly' class="fl" placeholder="请输入影片">
		<van-icon name="search" class="fr home-search-icon"/>
	</div>	
</template>
<script>
	export default {
		data(){
			return{
				readOnly:false,//the search input can`t be typed in the home page,
				searchViewBool:true
			}
		},
		methods:{
			homeRedirect(){
				let path = this.$route.path.toLowerCase()
				if(path=='/'||path =='/index'){
					this.$router.push('/Search')
				}else if(path == '/search'){
					
				}

			},
		},
		mounted(){
			if(this.$route.path=='/'||this.$route.path=='/index'){
				this.readOnly=true
			}	
		}
	}
</script>