<template>
  <div class="movieIndex">
      
      <TopBar :topBarInfo="movieTopBar"></TopBar>


      <van-swipe class="swiper" @change="onChange">
        <van-swipe-item
          class="swiper-item"
          v-for="(banner, index) in banners"
          :key="index"
        >
          <img :src="banner">
        </van-swipe-item>
        <ul class="swiper-indicator" slot="indicator">
          <li
            v-for="(banner, index) in banners"
            :key="index"
            :class="index == current ? 'active' : ''"
          ></li>
        </ul>
      </van-swipe>
      <van-tabs v-model="active" sticky color="#506cec">
        <van-tab title="推荐">
          <movie-grid
            v-for="(item, index) in in_theaters"
            :key="index"
            :movieInfo="item"
            @click.native="toMovieDetail(item)"
          ></movie-grid>
        </van-tab>
        <van-tab title="热门">
          <movie-grid
            v-for="(item, index) in coming_soon"
            :key="index"
            :movieInfo="item"
            @click.native="toMovieDetail(item)"
          ></movie-grid>
        </van-tab>
        <van-tab title="榜单">
          <movie-grid
            v-for="(item, index) in top250"
            :key="index"
            :movieInfo="item"
            @click.native="toMovieDetail(item)"
          ></movie-grid>
        </van-tab>
        <van-tab title="专题">
          <movie-grid
            v-for="(item, index) in in_theaters"
            :key="index"
            :movieInfo="item"
            @click.native="toMovieDetail(item)"
          ></movie-grid>
        </van-tab>
      </van-tabs>
  </div>
</template>
<script>
import TopBar from '@/components/topBar/topBar.vue' 
import movieGrid from "@/components/movie/movieGrid.vue"
export default {
  components: {
    movieGrid,TopBar
  },
  data() {
    return {
      current: 0,
      banners:[
        '../../static/images/banner-1.jpg',
        '../../static/images/banner-2.jpg',
        '../../static/images/banner-3.jpg',
        '../../static/images/banner-4.jpg',
      ],
      in_theaters: [],
      coming_soon: [],
      top250: [],
      active: 0,
      movieTopBar:{
          Title:'影片大全',
          subTitle:'',
          icons:[{
            icon:'fa-search',
            href:'/Search'
          },{
            icon:'fa-bars'
          }],
          description:''
        
      }
    };
  },
  mounted() {
    this.get_coming_soon();
    this.get_in_theaters();
    this.get_mtop250();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    get_coming_soon() {
      this.$axios.get("/api/v2/movie/coming_soon").then(res => {
        this.coming_soon = res.data.subjects;
      });
    },
    get_in_theaters() {
      this.$axios.get("/api/v2/movie/in_theaters").then(res => {
        this.in_theaters = res.data.subjects;
      });
    },
    get_mtop250() {
      this.$axios.get("/api/v2/movie/top250").then(res => {
        this.top250 = res.data.subjects;
      });
    },
    toMovieDetail(item) {
      this.$router.push({
        name: "电影详情",
        query: item
      });
    }
  },
  watch: {
    active(to, from) {
      console.log("to", to);
      console.log("from", from);
    }
  }
};
</script>
<style scoped>
.page-title {
  color: #1a1f25;
  font-size: 0.36rem !important;
}
.search-icon {
  margin-right: 0.2rem;
}
.banner {
  width: 100%;
}
.swiper {
  position: relative;
}
.swiper-item {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
.swiper-item img {
  width: 100%;
}
.swiper-indicator {
  position: absolute;
  right: 0.5rem;
  bottom: 0.4rem;
}
.swiper-indicator li {
  width: 0.15rem;
  height: 0.15rem;
  background: #eee;
  border-radius: 50%;
  float: left;
  margin-left: 0.2rem;
}
.swiper-indicator li.active {
  background: #506cec;
}
</style>