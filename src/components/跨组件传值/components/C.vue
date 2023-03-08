<template>
  <div class="content">
    provide和inject传接数据
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from "vue"
import type { Ref } from "vue";
const color = inject<Ref<string>>('color')
</script>

<style lang="scss" scoped>
.content {
  width: 200px;
  height: 200px;
  color: white;
  background-color: v-bind(color);
}
</style>