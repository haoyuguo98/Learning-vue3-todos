<script setup>
import useTodeStore from '../store/todolist';
import { watch } from 'vue';
const todolist = useTodeStore()

const { check } = todolist

watch(todolist.list,()=>{
  localStorage.setItem('todos',JSON.stringify(todolist.list))
})

// $subscribe是pinia专门提供检测数据变化的方法
// todolist.$subscribe(()=>{
//   localStorage.setItem('todos',JSON.stringify(todolist.list))
// })
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{todolist.leftCount}}</strong> item left</span>
    <ul class="filters">

      <li v-for="item in todolist.checkName" :key="item">
        <a :class="{selected:todolist.active===item}" href="#/" @click="check(item)" >{{item}}</a>
      </li>
     
    </ul>
    <button class="clear-completed" @click="todolist.clear">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
