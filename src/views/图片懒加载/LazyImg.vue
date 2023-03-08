<template>
  <div class="content">
    <div class="item" v-for="i in [1,2,3,4,5,6]" :key="i">
      <img v-lazy="imgUrl" alt="" src="../../assets/img/11.jpg" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, reactive } from "vue"
const imgUrl = ref('../../assets/img/11.jpg')
// const imgUrl = 'https://img-home.csdnimg.cn/images/20201124032511.png'

let dom = document.documentElement
// let dom = document.body
var ObserverList = []
var scrollFun = (() => {
  var initUrl = (num) => {
    ObserverList.forEach(({ el, value }, index) => {
      if (el.offsetTop < num) {
        el.src = value
        console.log(el);
        ObserverList.splice(index, 1)
      }
    })
  }
  return () => {
    window.addEventListener('scroll', () => {
      initUrl(100)
    })
  }
}
)()

const vLazy = {
  mounted(el, { value }) {
    ObserverList.push({ el, value })
    scrollFun()
  },
}




// const instance = getCurrentInstance()
// instance?.proxy?.$loading.hide()
</script>

<style lang="scss" scoped>
.content {
  .item {
    img {
      width: 300px;
    }
  }
}
</style>