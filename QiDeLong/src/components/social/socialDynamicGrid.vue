<template>
  <div class="social-dynamic-grid">
    <div class="social-user-info">
      <img class="avatar" :src="dynamicInfo.avatar" alt="">
      <span>{{dynamicInfo.author}}</span>
    </div>
    <p class="content">{{dynamicInfo.content}}</p>
    <img class="dynamic-img" :src="dynamicInfo.imgSrc" alt="">
    <ul class="edit-wrapper">
      <li>
        <img src="../../../static/images/icon.png" alt="">
        <span>{{dynamicInfo.reading}}</span>
      </li>
      <li>
        <img src="../../../static/images/icon.png" alt="">
        <span>{{dynamicInfo.collection}}</span>
      </li>
      <li>
        <img src="../../../static/images/icon.png" alt="">
        <span>{{dynamicInfo.reading}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dynamicInfo: Object
  }
}
</script>

<style scoped>
.social-dynamic-grid {
  font-size: .3rem;
  padding: .3rem;
  border-bottom: .2rem solid #eee;
}

.social-user-info {
  margin-bottom: .3rem;
}

.avatar {
  float: left;
  width: .5rem;
  vertical-align: middle;
  margin-right: .2rem;
}

.content {
  line-height: 1.3;
  letter-spacing: 2px;
  text-indent: 2em;
  margin-bottom: .3rem;
}

.dynamic-img {
  width: 100%;
  margin-bottom: .3rem;
}

.edit-wrapper {
  padding: 0 .2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.edit-wrapper li img {
  width: .5rem;
  vertical-align: middle;
  display: inline-block !important;
}
</style>
