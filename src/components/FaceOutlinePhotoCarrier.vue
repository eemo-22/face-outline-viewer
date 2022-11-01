<template>
  <div>
    <face-outline-photo-vue 
      v-for="(image, i) in listData"
      :key="image.photo_idx"
      :image="image"
      :info="infos[i]"
    />
    <pagination
      :pageSetting="pageDataSetting(total, limit, block, this.page)"
      @paging="pagingMethod"
    />
  </div>
</template>

<script>
import imgData from '../json/face-outline-data.json';
import pagination from './Pagination.vue';

import FaceOutlinePhotoVue from './FaceOutlinePhoto.vue';
export default {
  components: {
    imgData,
    FaceOutlinePhotoVue,
    pagination,
  },
  data() {
    return {
      originData: imgData.imgData,
      images: [],
      infos: [],

      listData: [],
      total:imgData.length, //  페이지에 담길 전체 데이터 개수
      page: 1,  //  현재 머무는 페이지
      limit: 5, //  한 페이지에 표시할 데이터의 개수
      block: 5  //  페이지 리스트에서 한 번에 보여질 페이지의 수
    }
  },
  created() {
    this.originData.forEach(element => {
      let {photo_idx, target, ...rest} = element;
      this.images.push(rest);
    });

    this.originData.forEach(element => {
      let {original, pre, post, result, ...rest} = element;
      this.infos.push(rest)
    })
    
    console.log('originData', this.originData);
    console.log('images', this.images);
  },
  mounted() {
    this.pagingMethod(this.page)
  },
  methods: {
    pagingMethod(page) {
      this.listData = this.images.slice(
        (page - 1) * this.limit,
        page * this.limit
      );
      this.page = page;
      this.pageDataSetting(this.total, this.limit, this.block, page);
    },

    pageDataSetting(total, limit, block, page) {
      const totalPage = Math.ceil(total / limit);
      let currentPage = page;

      //  전, 후 페이지 클릭 아이콘 숫자 변경
      const first = currentPage> 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const end = totalPage !== currentPage ? parseInt(currentPage, 10) + parseInt(1, 10) : null;

      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex = startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      return { first, end, list, currentPage };
    }
  }
}
</script>

<style>

</style>