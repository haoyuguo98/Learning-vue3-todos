<template>
  <div>
    根组件
  </div>
  <router-link to="/login">去登录</router-link>
  <router-link to="/home?name=haha&age=13">去首页</router-link>
  <router-view ></router-view>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>