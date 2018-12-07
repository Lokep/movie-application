<template>
  <div class="social-city">
    <social-city-grid v-for="(item, index) in cityData" :key="index" :cityInfo="item"></social-city-grid>
  </div>
</template>

<script>
import socialCityGrid from '@/components/social/socialCityGrid'
export default {
  components: {
    socialCityGrid
  },
  data() {
    return {
      cityData: [
        {
          img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg',
          avatar: '../../../static/images/dynamic/1.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, {
          img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541197052.jpg',
          avatar: '../../../static/images/dynamic/2.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, {
          img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2540474819.jpg',
          avatar: '../../../static/images/dynamic/3.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, {
          img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg',
          avatar: '../../../static/images/dynamic/4.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, {
          img: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537667301.jpg',
          avatar: '../../../static/images/dynamic/5.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, {
          img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg',
          avatar: '../../../static/images/dynamic/1.png',
          content: '今天晚上吃什么今天晚上吃什么'
        }, 
      ]
    }
  }
}
</script>

<style scoped>
.social-city {
  padding: .3rem;
  margin-right: -4%;
}
</style>
