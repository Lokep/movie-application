<style scoped>
.container {
    display: flex;
    flex-direction: column;
    font-size: .3rem;
}
.head-img {
    width: 100%;
    height: 4rem;
    -webkit-filter: blur(10px);
}
.head-img-hover {
    width: 100%;
    height: 3.2rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
}
.main-title {
    font-size: .4rem;
    color: #fff;
    font-weight: bold;
    margin-top: .5rem;
    margin-left: .5rem;
    letter-spacing: 2px;
}
.sub-title {
    font-size: .4rem;
    color: #fff;
    margin-left: .5rem;
    margin-top: .3rem;
}
.like {
    width: 4.3rem;
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
    margin-top: .3rem;
    justify-content: space-around;
}
.like>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .3rem 0;
}
.movie-score {
    margin-left: 0.2rem;
    color: #506cec;
}
.highlight-font {
    color: #506cec;
    font-size: .25rem;
    margin-bottom: .1rem;
}
.plain-font {
    color: #999;
    font-size: .25rem;
}
.movie-img {
    height: 2.4rem;
    width: 1.75rem;
    position: absolute;
    top: 1.6rem;
    right: .3rem;
}
.summary {
    color: #777777;
    margin-top: .4rem;
}
.original-title {
    margin-top: .4rem;
    margin-left: .4rem;
    color: #1f3463;
    font-size: .36rem;
    font-weight: bold;
    margin-bottom: .4rem;
}
.flex-row {
    display: flex;
    flex-direction: row;
    margin-bottom: .1rem;
    margin-left: .4rem;
}
.mark {
    margin-right: .3rem;
    white-space: nowrap;
    color: #999999;
}
.hr {
    margin-top: .45rem;
    height: 1px;
    width: 100%;
    background-color: #d9d9d9;
}
.synopsis {
    margin-left: .4rem;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
}
.synopsis-font {
    color: #999;
}
.summary-content {
    margin-top: .2rem;
    margin-right: .4rem;
    line-height: .4rem;
    letter-spacing: 1px;
}
.cast {
    margin-left: .4rem;
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
}
.cast-font {
    color: #999;
    margin-bottom: .4rem;
}
.cast-container {
    display: inline-flex;
    flex-direction: column;
    margin-bottom: .5rem;
    margin-right: .4rem;
    width: 1.7rem;
    text-align: center;
    white-space: normal;
}
.cast-imgs {
    white-space: nowrap;
}
.cast-img {
    width: 1.7rem;
    height: 2.1rem;
}
.cast-name {
    margin: .1rem auto 0;
}
</style>
<template>
  <div class="movie-detail">
    <HistoryBack></HistoryBack>

    <div class="container">
      <img class="head-img" :src="movieDetail.images.large" />
      <div class="head-img-hover">
        <span class="main-title">{{movieDetail.title}}</span>
        <span class="sub-title">{{movieDetail.countries[0]}}.{{movieDetail.year}}</span>
        <div class="like">
          <div>
            <span class="highlight-font">{{movieDetail.wish_count}}</span>
            <span class="plain-font">想看</span>
          </div>
          <div>
            <span class="highlight-font">{{movieDetail.collect_count}}</span>
            <span class="plain-font">人喜欢</span>
          </div>
          <div>
            <span class="highlight-font">{{movieDetail.comments_count}}</span>
            <span class="plain-font">条评论</span>
          </div>
        </div>
      </div>
      <img class="movie-img" :src="movieDetail.images.small" />
      <div class="summary">
        <div class="original-title">
          <span>{{movieDetail.original_title}}</span>
        </div>
        <div class="flex-row">
          <span class="mark">评分</span>
          <van-rate readonly v-model="rate" :size="10" color="#506cec"/>
          <span class="movie-score">{{movieDetail.rating.average}}分</span>
        </div>
        <div class="flex-row">
          <span class="mark">导演</span>
          <span>{{movieDetail.directors[0].name}}</span>
        </div>
        <div class="flex-row">
          <span class="mark">影人</span>
          <span v-for="item in movieDetail.casts">{{item.name}}/</span>
        </div>
        <div class="flex-row">
          <span class="mark">类型</span>
          <span v-for="item in movieDetail.genres">{{item}}&nbsp;</span>
        </div>
      </div>
      <div class="hr"></div>
      <div class="synopsis">
        <span class="synopsis-font">剧情简介</span>
        <span class="summary-content">{{movieDetail.summary}}</span>
      </div>
      <div class="hr"></div>
      <div class="cast">
        <span class="cast-font"> 影人</span>
        <!-- <van-tabs>
          <van-tab v-for="(item, index) in movieDetail.casts" :key="index" :line-width="0">
            <img :src="item.avatars.small" alt="" srcset="">
          </van-tab>
        </van-tabs> -->
      </div>
        <!-- <scroll-view class="cast-imgs" scroll-x="true" style="width:100%">
      <block wx:for="{{movie.castsInfo}}" wx:for-item="item">
        <view class="cast-container">
          <image class="cast-img" src="{{item.img}}"></image>
          <text class="cast-name">{{item.name}}</text>
        </view>
      </block>
    </scroll-view>-->
    </div>
  </div>
</template>
<script>
import HistoryBack from '../../components/historyBack/historyBack.vue'  
export default {
  data() {
    return {
      movieDetail: {},
      rate: null,
      imgSrc: {}
    }
  },
  components:{
    HistoryBack
  },
  mounted() {
    this.getMovieDetail(this.$route.query.id)
  },
  methods:{
    getMovieDetail(id) {
      this.$axios.get("/api/v2/movie/subject/" + id)
      .then(res => {
         this.movieDetail = res.data
         console.log(this.movieDetail)
        this.rate = Math.round(this.movieDetail.rating.average / 2)
      });
    }
  }
};
</script>