<style>
	.search-return{
		line-height: 1rem;
		font-size: .4rem;
		width: 7.2rem;
	}
	.search-return>i{
		font-size: inherit;
		line-height: inherit;
	}
	.search-history{
		width: 200%;
	}
	.history-box,.search-history-title,.search-hotpoint{
		width: 6.4rem;
	}
	.history-box,.search-hotpoint,.search-return{
		margin: 0 auto;
	}
	.history-box{
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
	}
	.search-history-title{
		font-size: .32rem;
		margin: .7rem auto 0;
	}
	.search-history li{
		width: 2.1rem;
		font-size: .24rem;
		margin-top: .2rem;
		float: left;
		margin-right: .1rem;
	}
	.search-history img{
		width: 100%;
		border-radius: 2px;
	}
	.search-history span{
		font-size: .28rem;
		line-height: 2.5;
	}
	.search-hotpoint>li{
		float: left;
		padding:.07rem .18rem;
		border-radius: 4px;
		background-color: #e6e6e6;
		color: #666;
		font-size: .24rem;
		margin: .2rem .12rem 0 0;
	}
</style>
<template>
	<div class="search">
		<div class="search-return ov">
			<i class="fa fa-long-arrow-left fl" @click='historyBack'></i>
		</div>
		<SearchPart></SearchPart>
		<!-- 最近搜索 -->
		<h5 class="search-history-title">最近搜索</h5>

		<div class="history-box ov">
			<ul class="search-history ov">
				<li>
					<img src="../assets/images/home-banner.jpg" alt="history">
					<span>生活大爆炸</span>
				</li>
				<li>
					<img src="../assets/images/home-banner.jpg" alt="history">
					<span>生活大爆炸</span>
				</li>
				<li>
					<img src="../assets/images/home-banner.jpg" alt="history">
					<span>生活大爆炸</span>
				</li>
				<li>
					<img src="../assets/images/home-banner.jpg" alt="history">
					<span>生活大爆炸</span>
				</li>
				<li>
					<img src="../assets/images/home-banner.jpg" alt="history">
					<span>生活大爆炸</span>
				</li>
			</ul>
		</div>
		<!-- 最近热门 -->
		<h5 class="search-history-title">最近热门</h5>

		<ul class="search-hotpoint">
			<li v-for='(hotpoint,index) in hotpoints' :key='index'>
				{{hotpoint}}
			</li> 
		</ul>


	</div>
</template>
<script>
	import SearchPart from '../components/searchPart/searchPart.vue'
	export default{
		data(){
			return {
				hotpoints:['悲伤逆流成河','殺破狼','超时空同居','破晓','武林外传']
			}
		},
		components:{
			SearchPart
		},
		methods:{
			historyBack(){
				this.$router.back();
			}
		},
		computed: {
			// RandomColor(index) {
			// 	let r, g, b;
			// 	r = Math.floor(Math.random() * 256);
			// 	g = Math.floor(Math.random() * 256);
			// 	b = Math.floor(Math.random() * 256);
			// 	return "rgb(" +r + ',' +g+ ',' +b+ ")";

			// }
		}

	}
</script>