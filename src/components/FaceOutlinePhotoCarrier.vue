<template>
  <div>
    <face-outline-photo-vue 
      v-for="image in images"
      :key="image.photo_idx"
      :image="image"/>
  </div>
</template>

<script>
import imgData from '../json/test-data.json';

import FaceOutlinePhotoVue from './FaceOutlinePhoto.vue';
export default {
  components: {
    imgData,
    FaceOutlinePhotoVue,
  },
  data() {
    return {
      images: imgData.imgData,
    }
  },
  created() {
    console.log('images', this.images);
    console.log('info', this.info);

    this.images.forEach(element => {
      delete element.target;
      delete element.photo_idx;
    });
  }
}
</script>

<style>

</style>