<style>
	
</style>
<template>
	<div class="search">
		<HistoryBack></HistoryBack>
		<SearchPart></SearchPart>
		<!-- 最近搜索 -->
		<SearchDefault></SearchDefault>
		<SearchResult></SearchResult>

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
				
			}
		},
		components:{
			SearchPart,
			HistoryBack,
			SearchDefault,
			SearchResult
		},
		methods:{

		},
		mounted(){
			
		},
		computed: {
			
		}

	}
</script>