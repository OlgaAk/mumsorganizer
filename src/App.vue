<template>
  <div id="app">
  <div class="sidebar">
    <p  v-for="page in pages"
        v-bind:key="page"
        v-bind:class="{active: currentPage === page }"
        v-on:click="currentPage = page">
      {{ page }}
    </p>
  </div>
    <component v-bind:is="currentPage"></component>
  </div>
</template>

<script>
import Startscreen from './components/Startscreen.vue'
import Medicine from './components/Medicine.vue'
import Feeding from './components/Feeding.vue'

export default {
  name: 'app',
  components: {
    Startscreen,
    Medicine,
    Feeding
  },
  data: function() {
    return {
    currentPage: 'Startscreen',
    pages: ['Startscreen','Feeding', 'Medicine', ]
    }
  },
  methods: {
    

  },
    computed: {

  }
}
</script>

<style>
#app {
   display: grid;
    grid-template-columns: 80px 220px ;
    grid-template-rows: 400px 1fr 
}
 .active {
    font-weight: bold;
  }
  .sidebar {
    background-image: linear-gradient(rgb(248, 247, 247), rgb(219, 215, 215))
  }
  body{
    margin:0;
  }
</style>
