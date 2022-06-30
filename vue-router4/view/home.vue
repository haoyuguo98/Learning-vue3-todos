<template>
  <div>
    主页
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
// const 
console.log(route.query);
</script>

<style lang="scss" scoped>

</style>