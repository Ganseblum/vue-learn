<template>
  <div class="content">
    <SlotC class="center">我是默认插槽</SlotC>
    <SlotC class="bottom" #bottom>我是底部插槽</SlotC>
    <SlotC class="top" #top>我是头部插槽</SlotC>

    我是内容
    <div>
      <button @click="change(1)">A组件</button>
      <button @click="change(2)">B组件</button>
    </div>
    
    <component :is="current.comName"></component>
    <br />
    <!-- 插槽 -->
  </div>
  <div class="section">

  </div>

</template>

<script lang="ts" setup>
import { markRaw, reactive, ref } from "vue"
import AVue from "./components/A.vue";
import BVue from "./components/B.vue";
import SlotC from './components/slotC.vue'
type Tabs = {
  name: string,
  comName: any
}

// 这里的markRaw就是给做个标记意味着告诉vue此组件永远不会改变或者说进入响应式
const Tabs = reactive<Tabs[]>([
  {
    name: 'A',
    comName: markRaw(AVue)
  }, {
    name: 'B',
    comName: markRaw(BVue)

  }
])
type Com = Pick<Tabs, 'comName'>
const current = reactive<Com>(
  { comName: Tabs[0].comName }
)
const change = (e: any) => {
  if (e == 1) {
    current.comName = AVue
  } else if (e == 2) {
    current.comName = BVue
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>