<template>
  <div class="content">
    <div style="margin-left:15px" v-for="item in slideList" key="item.id" @click="clickItem(item)">
      {{item.name}}
      <SlideBar v-if="item?.children?.length" :slideList="item.children"></SlideBar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import SlideBar from './slideBar.vue'
type slideList = {
  name: string,
  id: number,
  children?: slideList[] | []
}
type Props = {
  slideList?: slideList[]
}
defineProps<Props>()
const emit = defineEmits(['onclick'])

const clickItem = (item: any) => {
  emit('onclick', item)
}

</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  flex-direction: column;
}
</style>