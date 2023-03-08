<template>
  <div class="bigBox">

    <div class="tian">

      时间：{{ info.lastUpdate }}
    </div>
    <svg class="icon myFz" aria-hidden="true">
      <use xlink:href="#icon-dizhi"></use>
    </svg>
    <div class="address">
      {{ info.cityName }}
    </div>
    <div class="tian">
      <svg class="icon myFz" aria-hidden="true">
        <use xlink:href="#icon-tianqi"></use>
      </svg>
      {{ info.tq }}
    </div>

    <div class="tian">
      {{ info.qw }} 摄氏度
    </div>

    <div class="tian">
      {{ info.fl }} 请加衣
    </div>
  </div>

</template>

<script  setup>
import axios from "axios";
import { onMounted, ref, reactive } from "vue"


const info = ref({})
const obj = reactive({
  a: {
    a: 1
  }
})
console.log(obj.a.a);

onMounted(() => {
  axios.get('http://api.yytianqi.com/observe?city=CH010100&key=pmmjmbcgj256ja01').then(res => {
    info.value = res.data.data
  })
})


</script>

<style lang="scss" scoped>
.bigBox {
  display: flex;
  align-items: center;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.tian {
  margin-right: 20px;
}

.address {
  margin-right: 20px;
}

.myFz {
  font-size: 20px !important;
}
</style>