<template>
  <div class="content" ref="contentRef">
    <div class="img-box">
      <div class="bg"></div>
      <div class="huadong" :style="{left:data.left + 'px'}"></div>
    </div>


    <div class="btn-box" ref="btnRefs">
      <div class="btn" ref="btnRef" :style="{left:data.left+'px'}" @mousedown="mouseDown"></div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue"
let data = reactive({
  left: 28,
  downX: 0,
  offLeft: 0,
  contentLeft: 0
})
onMounted(() => {
  console.log(contentRef.value.offsetLeft);
  data.contentLeft = contentRef.value.offsetLeft
  data.offLeft = btnRef.value.offsetLeft
  document.body.addEventListener('mouseup', mouseUp)
})
const btnRef = ref()
const btnRefs = ref()
const contentRef = ref()
const mouseDown = (e) => {
  // e.pageX：鼠标点击的位置（整个浏览器）
  // e.offsetX: 鼠标点击的位置（元素）
  // btnRef.value.offsetLeft: ref元素距离父亲的距离
  const downX = e.pageX - btnRef.value.offsetLeft
  // console.log(downX);

  // console.log(e);
  document.body.addEventListener(
    'mousemove', mouseMove
  )
}
const mouseMove = (e) => {
  data.left = e.pageX - data.downX - data.offLeft - data.contentLeft
  // data.left = e.pageX - data.downX + ''
  // console.log(e.pageX - e.offsetX);
  // console.log(e.pageX);
  // console.log(data.left);
}
const mouseUp = () => {
  document.body.removeEventListener('mousemove', mouseMove)
}







const instance = getCurrentInstance()
instance?.proxy?.$loading.hide()
</script>

<style lang="scss" scoped>
.content {
  margin: auto;
  background-color: red;
  width: 400px;
  height: 400px;
  position: relative;

  .bg {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 300px;
    top: 50%;
    background: #000;
    transform: translateY(-50%);
  }

  .huadong {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    background: white;
    transform: translateY(-50%);
  }


  .btn-box {
    width: 100%;
    height: 20px;
    background-color: yellow;
    display: flex;
    align-items: center;

    .btn {
      position: absolute;
      width: 40px;
      height: 30px;

      background: blue;
    }
  }
}
</style>