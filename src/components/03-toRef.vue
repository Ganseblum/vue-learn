<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, toRef, toRaw } from "vue"

var obj = reactive({ names: 'zs', age: '18', sex: "男" })
console.log(obj);

// 将某个响应式数据单独结构出来
var names = toRef(obj, 'names')
console.log(names);
// 将响应式数据中的属性单独结构出来
var { sex, age } = toRefs(obj)
console.log(sex, age);


// 将响应式数据变成普通数据
var obj2 = toRaw(obj)
console.log(obj2);

</script>

<style lang="scss" scoped>

</style>