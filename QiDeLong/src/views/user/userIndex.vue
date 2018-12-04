<!-- lokep 12-03 -->
<style>
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
	.user-menu{
		font-size: .24rem;
		text-align: center;
		margin: .65rem auto 1.05rem;
		color: #666;
	}
	.user-menu i{
		display: block;
		font-size: .36rem;
		color: #000;
		margin-bottom: .1rem;
	}
	.sys-menu{
		margin: .875rem auto 0;
	}
	.sys-menu>li{
		overflow: hidden;
		line-height: .875rem;
	}
	.sys-menu span{
		float: left;
		font-size: .3rem;
	}
	.sys-menu i{
		float: right;
		font-size: .4rem;
		line-height: inherit;
	}
	.shareApp{
		margin: 0 auto;
		width: 4.5rem;
		text-align: center;
		overflow: hidden;
		height: 1.5rem;
	}
	.shareApp i{
		font-size: .36rem;
	}
</style>
<template>
    <div class="userIndex">
 		<div class="home-head">
 			<h4 class="home-title fl">我的</h4>
			<router-link to="../Message" class="home-sub-title fr">
				<span class="fa fa-bell"></span>
			</router-link>
 		</div>
 		<div class="userBox">
 			<!-- userInfo -->
 			<div class="user-card ov">
 				<!-- 头像 -->
 				<div class="fl user-profile ov">
 					<img src="../../../static/images/profile.jpg" alt="profile">
 				</div>
 				
 				<!-- 编辑资料 -->
 				<router-link class="fr user-link" to="/">
 					<div class="user-name ov"><h5>进击的小M</h5> <i>观影达人</i></div>
 					<span class="user-signature">乘风破浪会有时，直挂云帆济沧海</span>
 				</router-link>	
 			</div>
			
			<!--  -->
			<van-row class="user-menu">
				<van-col span="6">
					<router-link to='/'>
						<i class="fa fa-history"></i>
						观影历史	
					</router-link>
					
				</van-col>	
				<van-col span="6">
					<router-link to='/'>
						<i class="fa fa-comment"></i>
						我的评价
					</router-link>
					
				</van-col>	
				<van-col span="6">
					<router-link to='/'>
						<i class="fa fa-cc-paypal"></i>
						轻影卡券
					</router-link>
					
				</van-col>	
				<van-col span="6">
					<router-link to='/'>
						<i class="fa fa-google-wallet"></i>
						我的勋章
					</router-link>
					
				</van-col>	
			</van-row>
			
			<ul class="sys-menu common-width">
				<router-link to="/" tag="li">
					<span>我发布的主题</span>
					<i class="fa fa-caret-right"></i>
				</router-link>
				<router-link to="/" tag="li">
					<span>我参与的话题</span>
					<i class="fa fa-caret-right"></i>
				</router-link>
				<router-link to="/" tag="li">
					<span>我喜欢的电影</span>
					<i class="fa fa-caret-right"></i>
				</router-link>
			</ul>

			<ul class="sys-menu common-width">
				<router-link to="/User/userResponse?title=帮助与反馈" tag="li">
					<span>帮助与反馈</span>
					<i class="fa fa-caret-right"></i>
				</router-link>
				<li @click="shareAPP()">
					<span>分享APP</span>
					<i class="fa fa-caret-right"></i>
				</li>
				<router-link to="/" tag="li">
					<span>我的设置</span>
					<i class="fa fa-caret-right"></i>
				</router-link>
			</ul>
 		</div>

 		<!-- 弹窗 -->
 		<!-- 分享APP -->
		
 		<van-actionsheet v-model="show" :actions="actions" style="background-color: #fff;">
		  	
		  	<div class="shareApp">
		  		<van-col span="8">
			  		<a href="sinaweibo://">
			  			<i class="fa fa-weibo" style="font-size: .42rem;"></i>
			  		</a>
			  	</van-col>
			  	<van-col span="8">
			  		<a href="weixin://">
			  			<i class="fa fa-weixin"></i>
			  		</a>
			  	</van-col>
			  	<van-col span="8">
			  		<a href="mqq://">
			  			<i class="fa fa-qq"></i>
			  		</a>
			  	</van-col>
		  	</div>
		</van-actionsheet>	

    </div>
</template>
<script>
export default {
    data() {
        return {
        	show:false,
        	actions:[{
        		name:'分享'
        	}]
        }
    },
    components: {

    },
    methods:{
    	shareAPP(){
    		this.show = true
    	}
    }
}

</script>
