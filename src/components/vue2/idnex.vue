<template>
  <div>
    {{a}}
    {{b}}
    <button @click="b.age = 20">123</button>
    <button @click="b.names ='是苏打粉奥帆'">名字</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      a: 2,
      b: {
        age: 18,
        names: "123"
      }
    }
  },
  methods: {
    change() {

    }
  },
  watch: {
    a: function () {
      console.log(222);
    },
    b: {
      handler: function () {
        console.log(111111111);
      },
      deep: true,
      immediate: true
    },
    // 只监听某一属性 
    'b.names': {
      handler: function () {
        console.log(52222);
      },
      deep: true,
    },
  }
}


</script>

<style lang="scss" scoped>

</style>