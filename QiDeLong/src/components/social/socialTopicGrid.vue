<template>
  <div class="social-topic-grid">
    <img class="topic-img" :src="topicInfo.imgUrl" alt="">
    <div class="top-desc">
      <h3>{{topicInfo.title}}</h3>
      <span>已有{{topicInfo.num}}人参与了此话题的讨论</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topicInfo: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.social-topic-grid {
  width: 90%;
  box-sizing: border-box;
  margin: .3rem auto .3rem;
  height: 2rem;
  border: 1px solid #eee;
  -o-box-shadow: 0 0.866px 20px 0 rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: 0 0.866px 20px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0 0.866px 20px 0 rgba(0, 0, 0, 0.21);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 .3rem;
}

.topic-img {
  float: left;
  vertical-align: middle;
  margin-right: .3rem;
}

.top-desc {
  font-size: .3rem;
}

.top-desc h3 {
  margin-bottom: .2rem;
}
</style>
