<template>
  <div>
    <slot name="top"></slot>
    <slot></slot>

    <slot name="bottom" style="{background-color:blue}"></slot>

  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

</script>

<style lang="scss" scoped>
.top {
  background-color: yellow;
}

.center {
  background-color: red !important;
}

.bottom {
  background-color: blue;
}
</style>