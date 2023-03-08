<template>
  <div class="contents">
    <div>
      son
    </div>
    <div>

      父亲起的名字{{name}}<br>
      父亲传的列表{{list}}<br>
      我自己默认的年龄{{age}}
    </div>
    <button @click="btn">给父亲传值</button>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
type Props = {
  name?: string,
  list?: number[],
  age?: number
}

// const { list: lists } = defineProps<Props>()
// console.log(lists);

// 不需要单独引入props，可以直接使用
// defineProps<Props>()
// 需要设置默认值
withDefaults(defineProps<Props>(), {
  age: 12,
  name: "我自己的名字",
  list: () => [1, 2, 3] //特别注意，引用数据类型的不同设置方式
})


const emit = defineEmits(['onclick1', 'onclcik2'])
const list = reactive<number[]>([4, 5, 6])
const btn = () => {
  emit('onclick1', list)
}

</script>

<style  lang="scss" scoped>
.contents {
  background-color: red;

  div {
    background-color: yellow;
  }
}
</style>