<template>
  <div class="content">
    33
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import axios from 'axios'
await axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
  console.log(res);
})

</script>

<style lang="scss" scoped>
.content {
  background-color: red;
  flex: 1;
}
</style>