<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

</script>

<style lang="scss" scoped>
//  vue2中 /deep/  vue3中:deep()


// 插槽中使用css ，外界定义css名，内部定义css样式
//  :slotted(.a) {
//    color: red
//  }

// 动态css
// color:v-bind(red)
// 如果是个对象加引号
// const red=ref({
//   color:'pink'
// )}
// color: v-bind('red.color');
</style>