<template>
  <div>
    <button @click="flag = !flag">switch</button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
  <!-- 通过类名引入所需样式库的样式 -->
  <!-- appear控制页面显示时就触发动画效果 -->
  <!-- 
      appear-active-class=""
      appear-from-class=""
      appear-to-class=""
      appear
   -->
  <div>
    <button @click="flag2 = !flag2">switch2</button>
    <transition leave-active-class="animate__animated animate__bounceInLeft"
      enter-active-class="animate__animated animate__bounceInRight" appear
      appear-active-class="animate__animated animate__bounceInRight">
      <div v-if="flag2" class="box2"></div>
    </transition>
  </div>

  <!--transition-group  -->
  <div>
    <button @click="add">add</button>
    <button @click="pops">pop</button>
    <transition-group tag="sectoion" leave-active-class="animate__animated animate__bounce"
      enter-active-class="animate__animated animate__backInDown">
      <div :key="item" v-for="item  in list">{{item}}</div>
    </transition-group>
  </div>

  <!-- 状态过度 -->
  <div style="margin-top: 50px;">
    状态过度
    <input step="20" v-model="num.current" type="number" />
    <div>{{ num.tweenedNumber.toFixed(0) }}</div>
  </div>

  <!-- 平面过度 -->
  <div style="margin-top: 50px;">
    平面过度
    <button @click="random">random</button>
    <transition-group move-class="mmm" tag="div" class="listBox">
      <div class="item" v-for="item in list2" :key="item.id">
        {{ item.number }}
      </div>
    </transition-group>
  </div>




</template>

<script lang="ts" setup>
import 'animate.css'
import gsap from 'gsap'
import _ from 'lodash';

import { ref, reactive, watch } from "vue"
const flag = ref<boolean>(true)
const flag2 = ref<boolean>(true)

const list = reactive<number[]>([1, 2, 4, 5, 6, 7, 8, 9])
const add = () => {
  list.push(list.length + 2)
  console.log(list.length);
}
const pops = () => {
  list.pop()

}


const num = reactive({
  tweenedNumber: 0,
  current: 0
})

watch(() => num.current, (newVal) => {
  gsap.to(num, {
    duration: 1,
    tweenedNumber: newVal
  })
})
const list2 = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

const random = () => {
  list2.value = _.shuffle(list2.value)
}




</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: red;
}

//开始过度前
.fade-enter-from {
  background: red;
  width: 0px;
  height: 0px;
  transform: rotate(360deg)
}

//开始过度了
.fade-enter-active {
  transition: all 2.5s linear;
}

//过度完成
.fade-enter-to {
  background: yellow;
  width: 200px;
  height: 200px;
}

//离开的过度前
.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg)
}

//离开中过度
.fade-leave-active {
  transition: all 1s linear;
}

//离开完成
.fade-leave-to {
  width: 0px;
  height: 0px;
}

.box2 {
  width: 200px;
  height: 200px;

  background-color: yellow;
}

.listBox {

  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 9 + 18px);
  align-items: center;

  .item {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border: 1px solid blanchedalmond;
  }
}

.mmm {
  transition: all 1s;
}
</style>
<!-- transition生命周期 -->
 <!-- @before-enter="beforeEnter" //对应enter-from
  @enter="enter"//对应enter-active
  @after-enter="afterEnter"//对应enter-to
  @enter-cancelled="enterCancelled"//显示过度打断
  @before-leave="beforeLeave"//对应leave-from
  @leave="leave"//对应enter-active
  @after-leave="afterLeave"//对应leave-to
  @leave-cancelled="leaveCancelled"//离开过度打断 -->
