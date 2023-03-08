<template>
  <div class="content">
    <Card></Card>
    我是头部组件
    <!-- Teleport传送组件，将dom挂载到指定的节点上 -->
    <!-- disabled控制禁用 -->
    <!-- <Teleport to="body">
      <DialogVue></DialogVue>
    </Teleport> -->
    <button @click="changItem">change</button>
    <!-- :inclide=['组件名']，被缓存组件的名字 -->
    <keep-alive>
      <Form1 v-if="item == 1 " />
      <Form2 v-else />
    </keep-alive>


  </div>
</template>

<script lang="ts" setup>
import { onActivated, onDeactivated, onMounted, ref } from "vue"
import Card from "./Card.vue";
import DialogVue from "./components/dialog.vue";
import Form1 from './components/form1.vue'
import Form2 from './components/form2.vue'
const item = ref(1)
const changItem = () => {
  item.value = item.value == 1 ? 2 : 1
}


onMounted(() => {
  console.log(2222);
})
onActivated(() => {
  console.log('我被创建了');
})
onDeactivated(() => {
  console.log('我被销毁了');
})
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>