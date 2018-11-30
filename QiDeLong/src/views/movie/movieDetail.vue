<style scoped>
.container{
    display:flex;
    flex-direction: column;
}

.head-img{
    width:100%;
    height: 320rpx;
    -webkit-filter:blur(20px);
}

.head-img-hover{
    width: 100%;
    height: 320rpx;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction: column;
}

.main-title{
    font-size: 19px;
    color:#fff;
    font-weight:bold;
    margin-top: 50rpx;
    margin-left: 40rpx;
    letter-spacing: 2px;
}

.sub-title{
    font-size: 28rpx;
    color:#fff;
    margin-left: 40rpx;
    margin-top: 30rpx;
}

.like{
    display:flex;
    flex-direction: row;
    margin-top: 30rpx;
    margin-left: 40rpx;
}

.highlight-font{
    color: #f21146;
    font-size:22rpx;
    margin-right: 10rpx;
}

.plain-font{
    color: #666;
    font-size:22rpx;
    margin-right: 30rpx;
}


.movie-img{
    height:238rpx;
    width: 175rpx;
    position: absolute;
    top:160rpx;
    right: 30rpx;
}

.summary{
    margin-left:40rpx;
    margin-top: 40rpx;
    color: #777777;
}

.original-title{
    color: #1f3463;
    font-size: 24rpx;
    font-weight: bold;
    margin-bottom: 40rpx;
}

.flex-row{
    display:flex;
    flex-direction: row;
    margin-bottom: 10rpx;
}

.mark{
    margin-right: 30rpx;
    white-space:nowrap;
    color: #999999;
}

.hr{
    margin-top:45rpx;
    height:1px;
    width: 100%;
    background-color: #d9d9d9;
}

.synopsis{
    margin-left:40rpx;
    display:flex;
    flex-direction: column;
    margin-top: 50rpx;
}

.synopsis-font{
    color:#999;
}

.summary-content{
    margin-top: 20rpx;
    margin-right: 40rpx;
    line-height:40rpx;
    letter-spacing: 1px;
}

.cast{
    margin-left:40rpx;
    display:flex;
    flex-direction: column;
    margin-top:50rpx;
}

.cast-font{
    color: #999;
    margin-bottom: 40rpx;
}

.cast-container{
    display:inline-flex;
    flex-direction: column;
    margin-bottom: 50rpx;
    margin-right: 40rpx;
    width: 170rpx;
    text-align:center;
    white-space: normal;
}

.cast-imgs{
    white-space: nowrap;
}

.cast-img{
    width: 170rpx;
    height: 210rpx;
}
.cast-name{
    margin: 10rpx auto 0;
}
</style>

<template>
  <div class="movie-detail">
    <view class="container">
  <image class="head-img" src="{{movie.movieImg}}" mode="aspectFill" />
  <view class="head-img-hover" data-src="{{movie.movieImg}}" catchtap="viewMoviePostImg">
    <text class="main-title">{{movie.title}}</text>
    <text class="sub-title">{{movie.country + " · "+movie.year}}</text>
    <view class="like">
      <text class="highlight-font">
        {{movie.wishCount}}
      </text>
      <text class="plain-font">
        人喜欢
      </text>
      <text class="highlight-font">
        {{movie.commentCount}}
      </text>
      <text class="plain-font">
        条评论
      </text>
    </view>
  </view>
  <image class="movie-img" src="{{movie.movieImg}}" data-src="{{movie.movieImg}}" catchtap="viewMoviePostImg"/>
  <view class="summary">
    <view class="original-title">
      <text>{{movie.originalTitle}}</text>
    </view>
    <view class="flex-row">
      <text class="mark">评分</text>
      <template is="starsTemplate" data="{{stars:movie.stars, score:movie.score}}" />
    </view>
    <view class="flex-row">
      <text class="mark">导演</text>
      <text>{{movie.director.name}}</text>
    </view>
    <view class="flex-row">
      <text class="mark">影人</text>
      <text>{{movie.casts}}</text>
    </view>
    <view class="flex-row">
      <text class="mark">类型</text>
      <text>{{movie.generes}}</text>
    </view>
  </view>
  <view class="hr"></view>
  <view class="synopsis">
    <text class="synopsis-font">剧情简介</text>
    <text class="summary-content">{{movie.summary}}</text>
  </view>
  <view class="hr"></view>
  <view class="cast">
    <text class="cast-font"> 影人</text>
    <scroll-view class="cast-imgs" scroll-x="true" style="width:100%">
      <block wx:for="{{movie.castsInfo}}" wx:for-item="item">
        <view class="cast-container">
          <image class="cast-img" src="{{item.img}}"></image>
          <text class="cast-name">{{item.name}}</text>
        </view>
      </block>
    </scroll-view>
  </view>
</view>
  </div>
</template>

<script>
export default {
  
}
</script>
