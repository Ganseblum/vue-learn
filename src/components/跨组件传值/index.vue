<template>
  <div>
    <AVue />
    <BVue />
    <CVue />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue"
import AVue from "./components/A.vue";
import BVue from "./components/B.vue";
import CVue from "./components/C.vue";
const colorVal = ref<string>('blue')
provide('color', colorVal)
</script>

<style lang="scss" scoped>

</style>