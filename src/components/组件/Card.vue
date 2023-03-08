<template>
  <div class="content">
    我是全局挂载的组件
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

</script>

<style lang="scss" scoped>
.content {
  width: 100px;
  height: 20px !important;
  background-color: red;
}
</style>