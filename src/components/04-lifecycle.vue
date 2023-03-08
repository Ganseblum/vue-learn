<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue"

onMounted(() => {
  console.log('加载完成');
})
onUpdated(() => {
  console.log('数据更新了');
})
onUnmounted(() => {
  console.log('卸载了组件');
})

</script>

<style lang="scss" scoped>

</style>