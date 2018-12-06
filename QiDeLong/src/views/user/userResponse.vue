<style scoped>
	.ur-advice{
		margin: .2rem auto;
		font-size: .3rem;
		height: 4rem;
		padding: .3rem;
		border:1px solid #e6e6e6;
		width: 6rem;
	}
	.response-button{
		margin: 0 auto;
	}
</style>
<template>
	<div class="response">
		<HistoryBack></HistoryBack>
		<van-cell-group>
		  	<van-field
		  		v-model="username"
			    required
			    label="用户名"
			    placeholder="请输入用户名"
		  	/>

		  	<van-field
		  		v-model="email"
			    label="邮箱"
			    placeholder="请输入邮箱"
			    required
		  	/>
			 <van-field
			    v-model="message"
			    label="留言"
			    type="textarea"
			    placeholder="请输入留言"
			    required
			    rows="1"
			    :autosize='{maxHeight:400,minHeight:200}'
			 />

		</van-cell-group>
		<div class="common-width response-button">
			<van-button size="large" type="primary">提交反馈</van-button>
		</div>
	</div>
</template>
<script>
	import HistoryBack from '../../components/historyBack/historyBack.vue'
	export default{
		data(){
			return{
				username:'',
				message:'',
				email:''
			}
		},
		components:{
			HistoryBack
		}
	}
</script>