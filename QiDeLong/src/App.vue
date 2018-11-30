<template>
  <div id="app">
    <div style="padding-bottom: 50px;">
      <router-view/>
    </div>
		<Footer></Footer>	
  </div>
</template>

<script>

import Footer from "@/components/footer/footer.vue"

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
