<style scoped>
	.search-return{
		line-height: 1rem;
		font-size: .4rem;
		width: 7.2rem;
		padding: 0 .15rem;
		position: relative;
		z-index: 1111;
		background-color: rgba(255,255,255,.6);
	}
	.search-return>i{
		font-size: inherit;
		line-height: inherit;
	}
	.currentTitle{
		text-align: center;
		max-width: 4rem;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .36rem;
		line-height: inherit;
	}
</style>
<template>
	<div class="search-return ov">
		<i class="fa fa-long-arrow-left fl" @click='historyBack'></i>
		<h4 class="currentTitle">{{title}}</h4>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				title:''
			}
		},
		methods:{
			historyBack(){
				this.$router.back();
			},
		},
		created(){
			let t = this.$route.query.title; 
			this.title = t?t:'';
		}

	}
</script>
