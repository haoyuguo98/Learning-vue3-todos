<script setup>
import useTodeStore from '../store/todolist';

const todolist = useTodeStore()
const { hChange, isChange, hDel } = todolist

</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="todolist.isAll" @change="isChange(!todolist.isAll)" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">

      <li v-for="item in todolist.showList" :key="item.id" :class="{completed: item.done }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change='hChange(item.id)'/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="hDel(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
