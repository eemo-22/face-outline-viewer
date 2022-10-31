<template>
  <div class="image-viewer-wrap">
    <viewer class="viewer" :image="image" :options="options">
      <img class="viewer-img"
        onerror="this.onerror=null; this.src='./src/assets/notfound.png'"
        v-for="src in image"
        :key="src"
        :src="src" />
    </viewer>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
    }
  },
  data() {
    return {
      options: {
        title: 1,
        transition: false,
        loop: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 200px;
  max-height: 200px;
  margin: 10px;
}

</style>