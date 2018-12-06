<style>
.home {
    text-align: center;
}

.home-swiper {
    height: 10.35rem;
}

.swiper-item {
    width: 100%;
}

.swiper-item>div {
    width: 5.125rem;
    margin: .5rem auto .5rem;
    -o-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
    -webkit-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
    box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
    border-radius: 4px;
    overflow: hidden;
}

.swiper-item img {
    width: 100%;
}

.swiper-item p {
    font-size: .28rem;
    margin: .2rem 0 0 .2rem;
    text-align: left;
}

.swiper-item span {
    text-align: right;
    font-size: .3rem;
    margin-right: .2rem;
    margin: .2rem .2rem .2rem 0;
}

</style>
<template>
    <div class="home">
    	<TopBar :topBarInfo="homeTopBar"></TopBar>
        <!-- <div class="home-head ov">
            <h4 class="home-title fl">轻影</h4>
            <span class="home-sub-title fr">深夜记得早点睡</span>
        </div> -->
        <!-- <div class="home-search ov">
			<input class="fl" placeholder="请输入影片" @focus="homeRedirect">
			<van-icon name="search" class="fr home-search-icon"/>
		</div>	 -->
        <SearchPart></SearchPart>
        <div class="home-swiper">
            <van-swipe class="swiper">
                <van-swipe-item class="swiper-item" v-for="(list,index) in lists" :key="index">
                    <div @click="toMovieDetail(list)">
                        <img v-lazy="list.images.small" alt="movie">
                        <p> {{list.title}} {{list.original_title}} </p>
                        <span>----- {{list.directors[0].name}}</span>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import TopBar from '../components/topBar/topBar.vue'
import SearchPart from '../components/searchPart/searchPart.vue'
export default {
    data() {
        return {
            lists: [],
            homeTopBar:{
        		Title:'轻影',
        		subTitle:'',
        		icons:[{
        			icon:'',
        			href:''	
        		}],
        		description:'深夜记得早点睡'
            }
        }
    },
    components: {
    	TopBar,
        SearchPart
    },
    metaInfo: {
        title: 'lokep',
        meta: [{
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'white'
        }]
    },
    methods: {
        toMovieDetail(item) {
            this.$router.push({
                name: "电影详情",
                query: item
            });
        }
    },
    beforeMount() {
        this.$axios.get('/api/v2/movie/top250?start=0&count=3').then(res => {
            this.lists = res.data.subjects;
        })
    },
    computed: {

    }
}

</script>
