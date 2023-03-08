<template>
  <div>
    fateher
    <Son name="小明" :list='list' @onclick1="sonEvent"></Son>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import Son from './Son.vue'
const list = reactive<number[]>([1, 2, 3])
const sonEvent = (e: any) => {
  console.log(e);
}
</script>

<style lang="scss" scoped>

</style>