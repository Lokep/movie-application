<style>
	
</style>
<template>
	<div class="search" @click.stop.prevent="searchViewOff" >
		<HistoryBack></HistoryBack>
		<SearchPart @click.stop.prevent="searchViewOn"></SearchPart>
		<!-- 最近搜索 -->
		<SearchDefault v-show="show"></SearchDefault>
		<SearchResult v-show="revers"></SearchResult>

		<router-view></router-view>
	</div>
</template>
<script>
	import SearchPart from '../components/searchPart/searchPart.vue'
	import HistoryBack from '../components/historyBack/historyBack.vue'

	import SearchDefault from '@/views/search/searchDefault.vue'
	import SearchResult from '@/views/search/searchResult.vue'


	export default{
		data(){
			return {
				show:true
			}
		},
		components:{
			SearchPart,
			HistoryBack,
			SearchDefault,
			SearchResult
		},
		methods:{
			searchViewOn(){
				this.show = false
			},
			searchViewOff(){
				this.show = true
			}
		},
		mounted(){
			
		},
		computed: {
			revers(){
				return !this.show;
			}
		}

	}
</script>