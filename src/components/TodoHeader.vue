<script setup>
import { ref } from 'vue';
import useTodeStore from '../store/todolist'
const taskName = ref('')
const todolist = useTodeStore() 
const { hAdd } = todolist

const add=()=>{
  hAdd(taskName.value)
  taskName.value=''
}

</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="taskName" @keyup.enter="add" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
