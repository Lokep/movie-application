<style scoped>
	.search-return{
		line-height: 1rem;
		font-size: .4rem;
		width: 7.2rem;
	}
	.search-return>i{
		font-size: inherit;
		line-height: inherit;
	}
</style>
<template>
	<div class="search-return ov">
		<i class="fa fa-long-arrow-left fl" @click='historyBack'></i>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			historyBack(){
				this.$router.back();
			}
		}
	}
</script>
