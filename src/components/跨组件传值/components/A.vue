<template>
  <div>
    <p>这里是home组件</p>
    <button @click="sendMitt">$mitt发送数据</button>
    <About></About>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import emiter from "../../../utils/bus";
const money = ref<number>(98);
const sendMitt = () => {
  emiter.emit('moneyEvent', money.value += 2);
}
</script>

<style lang="scss" scoped>

</style>