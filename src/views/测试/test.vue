<template>
  <div class="a">
    <ul>
      <li @click="hide()" @mouseleave="show()">
        A
        <ul class="layer" :class="{ active: open }">
          <li>123</li>
        </ul>
      </li>
      <li>B
        <ul class="layer">
          <li>456</li>
        </ul>
      </li>
      <li>C
        <ul class="layer">
          <li>789</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
let open = ref(true)

const hide = () => {
  open.value = false
}
const show = () => {
  open.value = true

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}



.a {
  width: 500px;
  height: 500px;
  background-color: blue;
  position: relative;
}

ul {
  display: flex;

  li {
    list-style: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: red;
    text-align: center;
    margin-right: 20px;

    &:hover {
      .layer {
        opacity: 0;
        transition: all .5s;
      }

      .active {
        opacity: 1;
      }

    }


  }
}

.layer {
  position: absolute;
  width: 300px;
  opacity: 0;
  z-index: 99;
  top: 50px;
  left: 0;

  li {
    width: 300px;
    background-color: yellow;
  }
}
</style>