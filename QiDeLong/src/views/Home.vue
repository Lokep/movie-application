<style>
	.home{
		 text-align: center;
	}
	.home-head{
		width:6.7rem;
		height: 1.05rem;
		margin: 0  auto;
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
	.home-swiper{
		height: 10.35rem;
	}
	.swiper-item{
		width: 100%;
	}
	.swiper-item>div{
		width: 5.125rem;
		margin: .5rem auto .5rem;
	    -o-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
	    -webkit-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
	    box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
	    border-radius: 4px;
	    overflow: hidden;
	}
	.swiper-item img{
		width: 100%;
	}
	.swiper-item p{
		font-size: .28rem;
		margin: .4rem 0 0 .2rem;
		text-align: left;
	}
	.swiper-item span{
		text-align: right;
		font-size: .3rem;
		margin-right: .2rem;
		margin: .2rem .2rem .2rem 0;
	}
</style>
<template>
	<div class="home">
		<div class="home-head ov">
			<h4 class="home-title fl">轻影</h4>
			<span class="home-sub-title fr">深夜记得早点睡</span>

		</div>
		<div class="home-search ov">
			<input class="fl" placeholder="请输入影片" @focus="homeRedirect">
			<van-icon name="search" class="fr home-search-icon"/>
		</div>	
		<div class="home-swiper">
			<van-swipe class="swiper">
				<van-swipe-item class="swiper-item">
					<div>
						<img class="hahah" @click='handleImg' src="../assets/images/home-banner.jpg" alt="movie">
						<p>当你凝望深渊的时候，深渊也在凝望你</p>
						<span>-----尼采</span>
					</div>
				</van-swipe-item>
				<van-swipe-item class="swiper-item">
					<div>
						<img src="../assets/images/home-banner.jpg" alt="movie">
						<p>当你凝望深渊的时候，深渊也在凝望你</p>
						<span>-----尼采</span>
					</div>
				</van-swipe-item>
				<van-swipe-item class="swiper-item">
					<div>
						<img src="../assets/images/home-banner.jpg" alt="movie">
						<p>当你凝望深渊的时候，深渊也在凝望你</p>
						<span>-----尼采</span>
					</div>
				</van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>

	export default {
		data(){
			return{

			}
		},
		components:{

		},
		metaInfo: {
			title:'lokep',
			meta:[
				{
					name:'apple-mobile-web-app-status-bar-style',
					content:'white'
				}
			]
		},
		methods:{
			homeRedirect(){
				let path = this.$route.path
				console.log(path);
				if(path=='/'){
					this.$router.push('/Search')
				}

			},
			handleImg(e){
				console.log(e.target);
			}
		}
	}
</script>