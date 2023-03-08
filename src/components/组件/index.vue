<template>
  <div class="content">
    <div class="left">
      <SlideBarVue :slideList=slideList @onclick="touchSlide"></SlideBarVue>
      <Suspense>
        <template #default>
          <AsyncC></AsyncC>
        </template>
        <template #fallback>
          lodding
        </template>
      </Suspense>
    </div>
    <div class="right">

      <HeaderVue></HeaderVue>


      <ContentVue></ContentVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderVue from "./header.vue";
import SlideBarVue from "./slideBar.vue";
import ContentVue from "./content.vue";
import { defineAsyncComponent, reactive, ref } from "vue"
// import AsyncC from "./components/asyncC.vue";
const touchSlide = (e: any) => {
  console.log(e);
}

type slideList = {
  name: string,
  id: number,
  children?: slideList[] | []
}
const slideList = reactive<slideList[]>([
  {
    name: 'A',
    id: 1,
    children: [
      {
        name: 'a',
        id: 11,
        children: [{
          name: "aa",
          id: 111
        }]
      }
    ]
  },
  {
    name: 'B',
    id: 2,
    children: [
      {
        name: 'b',
        id: 22,
      }
    ]
  },
  {
    name: 'C',
    id: 3,

  }
])


const AsyncC = defineAsyncComponent(() => import('./components/asyncC.vue'))


</script>

<style lang="scss" scoped>
.content {
  display: flex;
  border: 1px solid black;

  .left {
    display: flex;
    flex: .5;
    flex-direction: column;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
}
</style>