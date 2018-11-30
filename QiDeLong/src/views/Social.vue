<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
}

.main-title {
  font-size: .4rem;
  color: #fff;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: .8rem;
  letter-spacing: 2px;
}

.sub-title {
  font-size: .5rem;
  color: #fff;
  margin-left: .8rem;
  margin-top: .6rem;
}

.like {
  display: flex;
  flex-direction: row;
  margin-left: .8rem;
  margin-top: .6rem;
}

.highlight-font {
  color: #f21146;
  font-size: .4rem;
  margin-right: .2rem;
}

.plain-font {
  color: #666;
  font-size: .4rem;
  font-size: 22rpx;
  margin-right: .6rem;
}

.movie-img {
  height: 2.4rem;
  width: 1.75rem;
  position: absolute;
  top: 1.6rem;
  right: .3rem;
}

.summary {
  margin-left: 40rpx;
  margin-top: 40rpx;
  color: #777777;
}

.original-title {
  color: #1f3463;
  font-size: 24rpx;
  font-weight: bold;
  margin-bottom: 40rpx;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 10rpx;
}

.mark {
  margin-right: 30rpx;
  white-space: nowrap;
  color: #999999;
}

.hr {
  margin-top: 45rpx;
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
}

.synopsis {
  margin-left: 40rpx;
  display: flex;
  flex-direction: column;
  margin-top: 50rpx;
}

.synopsis-font {
  color: #999;
}

.summary-content {
  margin-top: 20rpx;
  margin-right: 40rpx;
  line-height: 40rpx;
  letter-spacing: 1px;
}

.cast {
  margin-left: 40rpx;
  display: flex;
  flex-direction: column;
  margin-top: 50rpx;
}

.cast-font {
  color: #999;
  margin-bottom: 40rpx;
}

.cast-container {
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 50rpx;
  margin-right: 40rpx;
  width: 170rpx;
  text-align: center;
  white-space: normal;
}

.cast-imgs {
  white-space: nowrap;
}

.cast-img {
  width: 170rpx;
  height: 210rpx;
}
.cast-name {
  margin: 10rpx auto 0;
}
</style>

<template>
  <div class="movie-detail">
    <div class="container">
      <img class="head-img" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539779201.jpg">
      <div class="head-img-hover">
        <span class="main-title">电影</span>
        <span class="sub-title">国家.年</span>
        <div class="like">
          <span class="highlight-font">123123想看</span>
          <span class="plain-font">3212332人喜欢</span>
          <span class="highlight-font">23121123</span>
          <span class="plain-font">条评论</span>
        </div>
      </div>
      <img class="movie-img" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539779201.jpg" />
      <div class="summary">
        <div class="original-title">
          <span>啊啊啊啊</span>
        </div>
        <div class="flex-row">
          <span class="mark">评分</span>
        </div>
      </div>
      <div class="flex-row">
        <span class="mark">导演</span>
        <span>啊啊啊</span>
      </div>
      <div class="flex-row">
        <span class="mark">影人</span>
        <span>啊啊啊</span>
      </div>
      <div class="flex-row">
        <span class="mark">类型</span>
        <span>啊啊啊</span>
      </div>
      <div class="hr"></div>
      <div class="synopsis">
        <span class="synopsis-font">剧情简介</span>
        <span class="summary-content">剧情简介</span>
      </div>
      <div class="hr"></div>
      <div class="cast">
        <span class="cast-font">影人</span>
      </div>
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
</template>

<script>
export default {};
</script>
