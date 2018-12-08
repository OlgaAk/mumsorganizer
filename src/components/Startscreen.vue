<template>
  <div class="startscreen">
    <h2>Welcome to our app</h2>
  </div>
</template>

<script>
export default {
  name: 'Startscreen',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .startscreen {
    background-color: rgb(127, 204, 127);
    width: 300px;
    height: 400px;
  }
  h2{
    text-align: center;
    color:white
  }
</style>
