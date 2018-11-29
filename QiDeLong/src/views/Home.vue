<style>
	.home{
		
	}
	.home-head{
		width:6.7rem;
		height: 1.05rem;
		margin: 0  auto;
		padding-top: .3rem;
	}
	.home-title,.home-sub-title{
		vertical-align: bottom;
		display: inline-block;
		line-height: 1.05rem;
	}
	.home-title{
		font-size: .4rem;
	}
	.home-sub-title{
		font-size: .28rem;
		color: #ababab;
	}
</style>
<template>
	<div class="home">
		<div class="home-head ov">
			<h4 class="home-title fl">轻影</h4>
			<span class="home-sub-title fr">深夜记得早点睡</span>
			<router-link to='./Search.vue' >
				
			</router-link>	
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		metaInfo: {
			title:'lokep',
			meta:[
				{
					name:'apple-mobile-web-app-status-bar-style',
					content:'white'
				}
			]
		}
	}
</script>