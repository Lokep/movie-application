<template>
  <div class="social">
    <TopBar :topBarInfo="socialTopBar"></TopBar>
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
import TopBar from '@/components/topBar/topBar.vue' 
export default {
  components: {
    socialHot,
    socialDynamic,
    socialTopic,
    socialCity,
    TopBar
  },
  data() {
    return {
      active: 0,
      socialTopBar: {
        Title:'社区',
          subTitle:'',
          icons:[{
            icon:'fa-edit'
          }],
          description:''
      }
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
