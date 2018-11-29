<template>
  <div class="movie">
    <van-nav-bar>
      <template slot="left">
        <span class="page-title">影片大全</span>
      </template>
      <template slot="right">
        <van-icon class="search-icon" size=".36rem" color="#1a1f25" name="search"/>
        <van-icon size=".36rem" color="#1a1f25" name="wap-nav"/>
      </template>
    </van-nav-bar>
    <van-swipe class="swiper" @change="onChange">
      <van-swipe-item class="swiper-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt>
      </van-swipe-item>
      <ul class="swiper-indicator" slot="indicator">
        <li v-for="(image, index) in images" :key="index" :class="index == current ? 'active' : ''"></li>
      </ul>
    </van-swipe>
    <van-tabs v-model="active" sticky color="#506cec">
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="热门">热门</van-tab>
      <van-tab title="榜单">榜单</van-tab>
      <van-tab title="专题">专题</van-tab>
    </van-tabs>
  </div>
  <!-- <div class="movie">
        <van-nav-bar>
            <template slot="left">
                <span class="page-title">影片大全</span>
            </template>
            <template slot="right">
                <van-icon class="search-icon" size=".36rem" color="#1a1f25" name="search" />
                <van-icon size=".36rem" color="#1a1f25" name="wap-nav" />
            </template>
        </van-nav-bar>
        <van-swipe @change="onChange">
            <van-swipe-item>
                <img class="banner" src="../assets/images/banner.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="banner" src="../assets/images/banner.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="banner" src="../assets/images/banner.jpg" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
  </div>-->
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      images: [],
      movieList: [],
      active: 0
    };
  },
  mounted() {
    this.showMovieList();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    showMovieList() {
      this.$axios.get("/api/v2/movie/in_theaters").then(res => {
        this.movieList = res.data.subjects;
        let arr = this.movieList,
          that = this;
        for (let i = 0; i < 3; i++) {
          that.images.push(arr[i].images.small);
        }
      });
    }
  }
};
</script>
<style scoped>
.movie i {
  display: inline-block !important;
}
.page-title {
    color: #1a1f25;
    font-size: .36rem !important;
}

.search-icon {
    margin-right: .2rem;
}
.banner{
    width: 100%;
}

.swiper {
  height: 3rem;
  position: relative;
}

.swiper-item {
  width: 100%;
  padding: .2rem;
  box-sizing: border-box;
}

.swiper-item img {
  width: 100%;
}

.swiper-indicator {
  position: absolute;
  right: .5rem;
  bottom: .2rem;
}

.swiper-indicator li {
  width: .15rem;
  height: .15rem;
  background: #eee;
  border-radius: 50%;
  float: left;
  margin-left: .2rem;
}

.swiper-indicator li.active {
  background: red;
}
</style>
