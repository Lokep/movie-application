<template>
  <div class="movie">
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
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img src="item" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
      </div>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 0
      }
    },
    methods: {
      onChange(index) {
        this.current = index;
      }
    }
  }
</script>

<style scoped>
.page-title {
  color: #1a1f25;
  font-size: .36rem !important;
}
.search-icon {
  margin-right: .2rem;
}
</style>
