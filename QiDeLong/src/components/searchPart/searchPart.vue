<style>
	.home-search{
		width: 6.4rem;
		margin: 0 auto;
		font-size: .25rem;
		border-bottom: 1px solid #b6b6b6;
	}
	.home-search>input{
		height: .4rem;
		width: 5rem;
		padding: .2rem 0;
	}
	.home-search-icon{
		margin:.3rem .2rem 0 0;
	}
</style>
<template>
	<div class="home-search ov">
		<input class="fl" placeholder="请输入影片" @focus="homeRedirect">
		<van-icon name="search" class="fr home-search-icon"/>
	</div>	
</template>
<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			homeRedirect(){
				let path = this.$route.path
				if(path=='/'){
					this.$router.push('/Search')
				}

			},
		}
	}
</script>