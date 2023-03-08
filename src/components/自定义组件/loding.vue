<template>
  <div class="content" v-show="!flag">
    loading...
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const flag = ref<boolean>(false)
const show = () => {
  flag.value = true
}
const hide = () => {
  flag.value = false
}
defineExpose({
  show,
  hide
})
</script>

<style lang="scss" scoped>
.content {
  width: 200px;
  position: absolute;
  top: 50%;
  z-index: 9999;
  left: 50%;
  height: 200px;
  background-color: red;
}
</style>