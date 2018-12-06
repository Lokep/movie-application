<template>
  <div class="social">
    <van-tabs v-model="active">
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
      active: '热门推荐'
    }
  }
}
</script>
