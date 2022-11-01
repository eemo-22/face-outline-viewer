<template>
  <div>
    <div v-if="pageSetting.list.length" class="page-list">
      <button
        class="left-icon"
        v-if="pageSetting.first !== null"
        color="#dfdfdf"
        @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
      >Prev</button>
      <ul>
        <li
          :class="{ active: page === pageSetting.currentPage }"
          v-for="page in pageSetting.list"
          :key="page"
          @click="sendPage(page)"
        >
          {{ page }}
        </li>
      </ul>
      <button
        class="right-icon"
        v-if="pageSetting.end !== null"
        color="#dfdfdf"
        @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
      >Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pageSetting"],
  components: {
  },
  methods: {
    sendPage(page) {
      this.$emit("paging", page);
    }
  }
}
</script>

<style scoped>
</style>