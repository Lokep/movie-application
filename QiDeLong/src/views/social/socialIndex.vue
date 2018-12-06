<template>
  <div class="social">
    <van-nav-bar style="padding-top: .1rem;" :border="false">
      <template slot="left">
        <span class="social-title">社区</span>
      </template>
      <template slot="right">
        <van-icon class="edit" name="edit" color="#1a1f25" size=".46rem" />
      </template>
    </van-nav-bar>
    <van-tabs class="social-tab" v-model="active" sticky color="#506cec">
      <van-tab title="热门推荐">
        <social-hot></social-hot>
      </van-tab>
      <van-tab title="达人动态">
        <social-dynamic></social-dynamic>
      </van-tab>
      <van-tab title="话题聚焦">
        <social-topic></social-topic>
      </van-tab>
      <van-tab title="同城轻友">
        <social-city></social-city>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import socialHot from './socialHot'
import socialDynamic from './socialDynamic'
import socialTopic from './socialTopic'
import socialCity from './socialCity'
export default {
  components: {
    socialHot,
    socialDynamic,
    socialTopic,
    socialCity
  },
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>
.social .social-title {
  font-size: .46rem;
  font-weight: bold;
}


.social-tab {
  /* margin-top: 46px; */
}

.edit {
  margin-top: -.2rem;
}
</style>
