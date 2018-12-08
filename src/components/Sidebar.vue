<template>
  <div class="sidebar">
    <p  v-for="page in pages"
        v-bind:key="page"
        v-bind:class="{active: currentPage === page }"
        v-on:click="$emit('changePage')">
      {{ page }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['currentPage'],
  data: function () {
  return {
    pages: ['Feeding', 'Medicine', 'Startscreen', 'Купание']
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
