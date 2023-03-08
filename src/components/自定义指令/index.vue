<template>
  <div v-Move class="content">
  </div>

  <input type="text" v-model="messge">
  <div ref="div">{{messge}}</div>
  <button @click="change">chang</button>
</template>

<script lang="ts" setup>
import { Directive, DirectiveBinding, getCurrentInstance, nextTick, ref } from "vue"

const messge = ref('小明')
const div = ref<HTMLElement>()
const change = async () => {
  messge.value = '哈哈哈哈'
  await nextTick()
  console.log(div.value?.innerHTML);
}

type Dir = {
  background: string
}

const vMove: Directive = {
  mounted(el: HTMLElement) {
    let moveEl = el
    console.log(moveEl);
    const moueDown = (e: MouseEvent) => {
      let X = e.clientX - el.offsetLeft
      let Y = e.clientY - el.offsetTop
      const move = (e: MouseEvent) => {
        console.log(e.clientX);
        el.style.left = e.clientX - X + 'px'
        el.style.top = e.clientY - Y + 'px'
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })

    }
    moveEl.addEventListener('mousedown', moueDown)

  }
}

// const vMove: Directive<any, void> = {
//   mounted: (...a) => {
//     console.log(a);
//   }
// }


const instance = getCurrentInstance()
instance?.proxy?.$loading.show()
setTimeout(() => {
  instance?.proxy?.$loading.hide()
}, 1000)
</script>

<style lang="scss" scoped>
.content {
  width: 200px;
  height: 200px;
  background-color: red;
  position: relative;
}
</style>