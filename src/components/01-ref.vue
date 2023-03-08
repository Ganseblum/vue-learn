<template>
  <div>
    ref: {{ name1 }}
  </div>

  <div>
    shallow: {{name4}}
  </div>

  <div>
    myRef:{{obj}}
  </div>

  <div>
    <button @click="changeName">改变</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";
import type { Ref } from "vue";
import { track, trigger } from "@vue/reactivity";

const name1 = ref<string>("小明");


// 类型复杂的时候使用
type M = string;
const name2 = ref<M>("小明");
const name3: Ref<M> = ref('小明')

// shallowRef 浅层的ref,
// shallowRef和ref不能一起写，ref会造成视图更新
// triggerRef强制更新shallowRef
const name4 = shallowRef({ name: "浅层的名字" })
//customRcustomRef自定义ref
function myRefT<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track() //收集依赖
        return value
      },

      set(newValue) {
        value = newValue
        trigger()  //触发依赖
      }
    }
  })
}
const obj = myRefT<string>('测试自己')



const changeName = () => {
  // name1.value = "小红";
  // 不更新试图的情况下，值更改，试图不变
  name4.value.name = "更改了浅层次位小红";
  triggerRef(name4)
  console.log(name4);
  console.log(isRef(name4));

  obj.value = '成功测试自己'
};



</script>

<style lang="scss" scoped>

</style>
