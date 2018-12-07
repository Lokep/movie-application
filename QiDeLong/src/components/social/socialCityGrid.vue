<template>
  <div class="social-city-grid">
    <div class="head-img">
      <img :src="cityInfo.img" alt="">
    </div>
    <div class="city-user-info">
      <img class="avatar" :src="cityInfo.avatar" alt="">
      <p class="content">{{cityInfo.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityInfo: Object
  }
}
</script>

<style scoped>
.social-city-grid {
  width: 46%;
  margin-right: 4%;
  margin-bottom: .3rem;
  float: left;
}
.head-img {
  width: 100%;
  height: 3.6rem;
  overflow: hidden;
}
.head-img img {
  width: 100%;
}
.city-user-info {
  padding: .2rem .1rem;
  border: 1px solid #eee;
  overflow: hidden;
}
.avatar {
  width: .8rem;
  float: left;
  vertical-align: middle;
  margin-right: .1rem;
}
.content {
  font-size: .24rem;
  margin-top: .05rem;
}
</style>
