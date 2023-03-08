<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, reactive, watchEffect } from "vue"

let sum = 1
const total1 = computed(() => {
  return sum + 1
})

const total2 = computed({
  get() {
    return sum + 1
  },
  set() {
    sum + 1
  }
})



let num1 = ref(1)
let num2 = ref(2)
let num3 = reactive({
  name: 'zs'
})
const unwatch = watch(num1, (newValue, oldValue) => {
  console.log(newValue, oldValue);
})
// unwatch() //不需要监听时
// 多组监听
watch([num1, num2], ([newValue1, newValue2], [oldValue1, oldValue12]) => {
  console.log('--------------');
  console.log(newValue1, newValue2);
  console.log(oldValue1, oldValue12);
  console.log('--------------');

}, {
  immediate: true,
  deep: true
})
// 监听单个属性
watch(() => num3.name, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, {
  immediate: true,
  deep: true
})

num3.name == '小明'
// 只能获取变化后的值
watchEffect((oninvalidate) => {
  oninvalidate(() => {
    console.log('我是watchEffect');
  })
  console.log(num3.name);
}, {

  // flush：回调函数的触发时机。pre：默认，dom 更新前调用，post: dom 更新后调用，sync 同步调用。
  // onTrack / onTrigger：用于调试的钩子。在依赖收集和回调函数触发时被调用。
  flush: 'post',
  onTrack(event) {
    console.log(event);
  },
})


</script>

<style lang="scss" scoped>

</style>