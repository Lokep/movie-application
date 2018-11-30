<style>
	.search-return{
		line-height: 1rem;
		font-size: .4rem;
		width: 7.2rem;
		margin: 0 auto;
	}
	.search-return>i{
		font-size: inherit;
		line-height: inherit;
	}
</style>
<template>
	<div class="search">
		<div class="search-return ov">
			<i class="fa fa-long-arrow-left fl" @click='historyBack'></i>
		</div>
		<SearchPart></SearchPart>

	</div>
</template>
<script>
	import SearchPart from '../components/searchPart/searchPart.vue'
	export default{
		data(){
			return {

			}
		},
		components:{
			SearchPart
		},
		methods:{
			historyBack(){
				this.$router.back();
			}
		}
	}
</script>