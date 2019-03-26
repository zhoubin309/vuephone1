<template>
  <div id="home">
    <h2>这是home页面</h2>
    <div>
      <mt-range v-model="rangeValue" :min="10" :max="90" :step="10" :bar-height="5"></mt-range>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
      return {
          rangeValue: 20
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

