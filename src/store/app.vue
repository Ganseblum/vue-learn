<template>
  <div>
    {{Test.current}}
    {{Test.age}}
    {{Test.user}}
    <div>
      {{Test.ageGet}}
      {{Test.currentGet}}
    </div>

    <button @click="changState">changState</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue"
import { useTestStore } from "./storage/test";
import { storeToRefs } from 'pinia'
const instance = getCurrentInstance()
instance?.proxy?.$loading.hide()
const Test = useTestStore()
// storeToRefs解决解构赋值失去响应性
const { current, age } = storeToRefs(Test)
console.log(current, age);

const changState = () => {
  // 直接修改
  // Test.current = 5

  // 批量修改
  // Test.$patch({
  //   current: 5
  // })

  // 批量修改函数形式
  // Test.$patch((state) => {
  //   state.current++;
  // })

  // 整个对象修改(所有属性)
  Test.$state = {
    current: 10,
    age: 30,
    user: {
      name: '123',
      sex: 'nan'
    }
  }
}

Test.getLoginInfo()

</script>

<style lang="scss" scoped>

</style>