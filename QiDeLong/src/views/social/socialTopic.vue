<template>
  <div class="social-topic">
    <social-topic-grid v-for="(item, index) in topicData" :key="index" :topicInfo="item"></social-topic-grid>
  </div>
</template>

<script>
import socialTopicGrid from '@/components/social/socialTopicGrid'
export default {
  components: {
    socialTopicGrid
  },
  data() {
    return {
      topicData: [
        {
          imgUrl: '../../../static/images/icon.png',
          title: '看电影时你喜欢喝什么',
          num: 12321331
        }, {
          imgUrl: '../../../static/images/icon.png',
          title: '看电影时你喜欢喝什么',
          num: 12321331
        }, {
          imgUrl: '../../../static/images/icon.png',
          title: '看电影时你喜欢喝什么',
          num: 12321331
        }, {
          imgUrl: '../../../static/images/icon.png',
          title: '看电影时你喜欢喝什么',
          num: 12321331
        }, {
          imgUrl: '../../../static/images/icon.png',
          title: '看电影时你喜欢喝什么',
          num: 12321331
        }
      ]
    }
  }
}
</script>