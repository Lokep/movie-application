<template>
  <div class="movie-grid">
    <img :src="movieInfo.images.small" alt="">
    <div class="movie-info">
      <div class="movie-info-header">
        <span>{{movieInfo.title}}</span>
      </div>
      <van-rate v-model="movieInfo.rating.average/2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: Object
  },
}
</script>

<style scoped>
.movie-grid i {
  display: inline-block !important;
}
</style>

