<template>
  <div class="image-viewer-wrap">
    <span>photo_idx: {{info.photo_idx}}</span>,
    <span>target: {{info.target}}</span>
    <viewer class="viewer"
      :options="options">
      <img class="viewer-img" loading="lazy"
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
    },
    info: {
      type: Object,
    }
  },
  data() {
    return {
      options: {
        title: 1,
        transition: false,
        loop: false,
        i: 0
      }
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 150px;
  height: 150px;
  margin: 10px 10px 30px 10px;
  object-fit: cover;
}

</style>