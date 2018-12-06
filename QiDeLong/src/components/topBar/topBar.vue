<style scoped>
	.home-head {
    width: 6.7rem;
    height: 1.05rem;
    margin: 0 auto;
}

.home-title,
.home-sub-title {
    vertical-align: bottom;
    display: inline-block;
    line-height: 1.05rem;
}

.home-title {
    font-size: .4rem;
}

.home-sub-title{
    font-size: .28rem;
    color: #ababab;
}
.home-head i{
	font-size: .36rem;
	color: #000;
	line-height: 1.05rem;
	float: left;
	margin:0 .1rem;
}
</style>
<template>
	<div class="home-head ov">
        <div class="fl ov">
        	<h4 class="home-title fl">{{topBarInfo.Title}}</h4>
        	<span class="home-sub-itle fl">{{topBarInfo.subTitle}}</span>
        </div>
        <div class="fr">
        	<span class="home-sub-title fl">{{topBarInfo.description}}</span>
        	<i class="fa" v-for='(icon,index) in topBarInfo.icons' @click="topBarAction(icon.href)" :key="index" :class="icon.icon"></i>
        </div>
    </div>
</template>
<script>
	export default{
		props:['topBarInfo'],
		data(){
			return{

			}
		},
		methods:{
			topBarAction(e){
				if(e){
					this.$router.push(e)
				}
				
			}
		},
		mounted(){

		}
	}


	// {
	// 	Title:'',标题
	// 	subTitle:'',副标题
	// 	icons:[{
	// 		icon:'',图标
	// 		href:''	对应跳转路径，目前只做点击跳转
	// 	}],
	// 	description:''右侧描述性文字
	// }

</script>