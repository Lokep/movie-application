<!-- lokep 12-03 -->
<style scoped>
	.home-sub-title{
		font-size: .36rem;
		color: #000;
	}
	.userBox{
		border-top:1px solid #e6e6e6;
	}
	.user-card{
		width: 6.7rem;
		margin: 0 auto;
		padding-top: .56rem;
	}
	.user-profile,.user-profile>img{
		width: 1.26rem;
		height: 1.26rem;
		border-radius: 1.26rem;
	}
	.user-link{
		width: 5rem;
	}
	.user-name>*{
		float: left;
	}
	.user-name>h5,.user-signature{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.user-name>h5{
		font-size: .36rem;
		margin-top: .1rem;
		max-width: 2.7rem;
	}
	.user-name>i{
		font-size: .24rem;
		border:1px solid #0084ff;
		color: #0084ff;
		padding: .02rem .05rem;
		border-radius: 4px;
		margin: .15rem 0 0 .15rem;
	}
	.user-signature{
		font-size: .27rem;
		color: #999;
		margin-top: .1rem;
		display: block;
		max-width: 5rem;
	}
</style>
<template>
    <div class="user">
 		<div class="home-head">
 			<h4 class="home-title fl">我的</h4>
			<router-link to="/Message" class="home-sub-title fr">
				<span class="fa fa-bell"></span>
			</router-link>
 		</div>
 		<div class="userBox">
 			<!-- userInfo -->
 			<div class="user-card ov">
 				<!-- 头像 -->
 				<div class="fl user-profile ov">
 					<img src="../../static/images/profile.jpg" alt="profile">
 				</div>
 				
 				<!-- 编辑资料 -->
 				<router-link class="fr user-link" to="/">
 					<div class="user-name ov"><h5>进击的小M</h5> <i>观影达人</i></div>
 					<span class="user-signature">乘风破浪会有时，直挂云帆济沧海</span>
 				</router-link>	
 			</div>
	
			<van-row>
				<van-col span="6"></van-col>	
				<van-col span="6"></van-col>	
				<van-col span="6"></van-col>	
				<van-col span="6"></van-col>	
			</van-row>

 		</div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    components: {

    },
}

</script>
