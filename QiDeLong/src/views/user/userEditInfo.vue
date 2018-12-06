<style>
	.edit-top-profile{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 2.5rem;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}
	.edit-top-profile>img,.edit-top-profile>input{
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 0;
		bottom: 0;
	}
	.edit-top-profile>input{
		opacity: 0;
	}
	.edit-userName{
		font-size: .32rem;
		margin: .2rem auto;
		max-width: 4rem;
		padding: 0 .2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
		text-align: center;
		position: relative;
	}
	.edit-userName:before{
		position: absolute;
		right: 0;
	}
	.edit-form{
		margin: 0 auto;
		height: 4rem;
	}
	.edit-list{
		background-color: pink;
		margin-bottom: 1rem;
		height: .7rem
	}
	.edit-list>span{
		font-size: .32rem;
	}
</style>
<template>
	<div class="userEditInfo">
		<HistoryBack></HistoryBack>	
		<div class="edit-top">
			
			<div class="edit-top-profile">
				<img src="../../assets/images/profile.jpg" alt="头像">
				<input type="file" id="changeProfile">
			</div>
		</div>
		<div class="edit-content ov">
			<span class="edit-userName fa fa-pencil-square-o" contenteditable :style="{width:name.length+'em'}">{{name}}</span>
			<div class="edit-form common-width">
				<div class="edit-list">
					<span class="fl">性别</span>
					<div class="edit-list-content"></div>
				</div>
				<div class="edit-list">
					<span>sdafasd</span>
				</div>
			</div>
				
		</div>
	</div>
</template>
<script>
	import HistoryBack from '../../components/historyBack/historyBack.vue'
	export default{
		data(){
			return{
				name:'Lokep',
				radio:''
			}
		},
		components:{
			HistoryBack
		},
		mounted(){
			console.log(this.name.length+'em');
		},
		methods:{
			onRead(){

			}
		}
	}
</script>