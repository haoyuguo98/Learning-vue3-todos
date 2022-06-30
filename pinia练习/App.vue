<template>
  <div>
    根组件
  </div>
  
  <p>{{content.num}}</p>
  <button @click="content.add">点我</button>
</template>

<script setup>
// 按需导入
// import {useContentStore} from './store/content.js'
// 默认导入
import useContentStore from './store/content.js'

const content = useContentStore()

// 解构pinia数据
const {num,add}=content
</script>

<style lang="scss" scoped>

</style>