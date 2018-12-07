<template>
  <div class="social-hot">
    <div class="head-cont">
      <img class="head-img" src="../../../static/images/banner-3.jpg" alt="">
      <div class="head-title">
        <van-icon color="blue" name="points" />
        <span>每周影报</span>
      </div>
      <p class="head-mid">
        盘点截止到2018年9月以来，全国播放量最高的十大电影的拍摄历程
      </p>
      <p class="head-btm">三体综合工作室</p>
    </div>
    <ul>
      <li>
        <img src="../../../static/images/banner-3.jpg" alt="">
        <div class="content">
          <p>盘点截止到2018年9月以来，全国播放量最高的十大电影的拍摄历程</p>
          <span>三体综合工作室</span>
        </div>
      </li>
      <li>
        <img src="../../../static/images/banner-3.jpg" alt="">
        <div class="content">
          <p>盘点截止到2018年9月以来，全国播放量最高的十大电影的拍摄历程</p>
          <span>三体综合工作室</span>
        </div>
      </li>
    </ul>
    <div class="hot-topic">
      <p class="topic-title">#你最喜欢的电影是哪一部</p>
      <p class="topic-cont">盘点截止到2018年9月以来，全国播放量最高的十大电影的拍摄历程，你更喜欢哪一部</p>
      <p class="topic-desc">365人正在参与这个话题的讨论<span class="arrow">>>></span></p>
    </div>
  </div>
</template>

<style scoped>
.social-hot {
  padding: .3rem;
  font-size: .3rem;
}
.head-cont {
  position: relative;
  color: #fff;
  margin-bottom: .3rem;
}
.head-img {
  width: 100%;
}
.head-title {
  position: absolute;
  top: .3rem;
  left: .2rem;
}
.head-title span {
  margin-left: .2rem;
}
.head-mid {
  position: absolute;
  left: .2rem;
  bottom: 25%;
}
.head-btm {
  position: absolute;
  left: .2rem;
  bottom: .3rem;
}
ul li {
  overflow: hidden;
  margin-bottom: .3rem;
}
ul li img {
  width: 40%;
  height: 2rem;
  float: left;
  vertical-align: middle;
  margin-right: .1rem;
}
.content {
  padding-top: .1rem;
}
.content span {
  display: inline-block;
  margin-top: .15rem;
  color: #999;
}
.hot-topic {
  width: 100%;
  height: 2.6rem;
  background: #1a1f25;
  color: rgb(240, 235, 235);
  padding: .3rem;
  box-sizing: border-box;
  font-size: .24rem;
}
.topic-title {
  font-size: .3rem;
  color: #fff;
  margin-bottom: .2rem;
}
.topic-cont {
  margin-bottom: .3rem;
  color: rgb(201, 196, 196);
}
.arrow {
  float: right;
  margin-right: .3rem;
  margin-top: .1rem;
}
</style>
