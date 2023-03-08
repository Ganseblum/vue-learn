<template>
  <div>
    <p>这里是about组件</p>
    <p>接收到的数据：{{ amount }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import emiter from '../../../utils/bus';
const amount = ref(0);

onMounted(() => {
  // 接送
  emiter.on('moneyEvent', (res: any) => {
    amount.value = res;
  });
})

onBeforeMount(() => {
  // 清除事件
  emiter.off('moneyEvent');
});

</script>

<style lang="scss" scoped>

</style>