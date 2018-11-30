<template>
  <div class="movie-grid">
    <img class="movie-image" :src="movieInfo.images.small" alt>
    <div class="movie-info">
      <div class="movie-info-header">
        <span class="movie-name">{{movieInfo.title}}</span>
        <img class="movie-bg" src="../../../static/images/movie.png" alt="" srcset="">
      </div>
      <div class="movie-rate">
        <van-rate readonly v-model="rate" :size="10" color="#506cec"/>
        <span class="movie-score">{{movieInfo.rating.average}}分</span>
      </div>
      <span class="movie-director">导演：{{movieInfo.directors[0].name}}</span>
      <span class="movie-actor">
        演员：
        <span v-for="item in movieInfo.casts">{{item.name}} /</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieInfo: Object
  },
  data() {
    return {
      rate: Math.round(this.movieInfo.rating.average / 2)
    };
  }
};
</script>

<style scoped>
.movie-grid {
  width: 90%;
  margin: 0.8rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem;
  height: 2.4rem;
  box-sizing: border-box;
  -o-box-shadow: 0.5px 0.866px 6px 0 rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: 0.5px 0.866px 6px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0.5px 0.866px 6px 0 rgba(0, 0, 0, 0.21);
  font-size: 0.3rem;
}
.movie-image {
  width: 2rem;
  height: 2.7rem;
  margin-top: -0.7rem;
}

.movie-info {
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
}

.movie-info-header {
  margin-bottom: .2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.movie-bg {
  width: .4rem;
  height: .3rem;
  margin-top: .1rem;
}

.movie-name {
  font-size: 0.3rem;
  font-weight: 700;
}

.movie-rate {
  display: flex;
  flex-direction: row;
  margin-bottom: .2rem;
}

.movie-score {
  margin-left: 0.2rem;
  color: #506cec;
}

.movie-director {
  font-size: .25rem;
  margin-bottom: .1rem;
}

.movie-actor {
  width: 3.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .25rem;
}
</style>

