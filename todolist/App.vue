<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

import {ref, watch} from 'vue'
// 提供数据
// const list = ref([
//   {
//     id: 1,
//     name: '吃饭',
//     done: true,
//   },
//   {
//     id: 2,
//     name: '睡觉',
//     done: false,
//   },
//   {
//     id: 3,
//     name: '打豆豆',
//     done: false,
//   },
// ])
// 实现持久存储
const list=ref(JSON.parse(localStorage.getItem('todolist')||''))
const ChangeDone = ( id ) => {
  // console.log(id);
 const isDone = list.value.find ( item => item.id === id )
 isDone.done = !isDone.done
// console.log(isDone.done);
}

const hDel = (id)=>{
  // console.log(id);
 list.value= list.value.filter(item=>item.id!==id)
}

const hAdd=(taskName)=>{
  list.value.push({
    // 获取当前时间戳毫秒 唯一值
    id : Date.now(),
    name : taskName,
    done : false
  })
}

const hChangeAll = (val)=>{
  list.value.forEach(item=>item.done=val)
}
// 监听数据变化后 实现持久化存储
watch(list,()=>{
  localStorage.setItem('todolist',JSON.stringify(list.value))
},{
  deep:true
})
</script>

<template>
  <section class="todoapp">
    <TodoHeader @add='hAdd'></TodoHeader>
    <TodoMain :list="list" @hChangeDone='ChangeDone' @del='hDel' @changeAll="hChangeAll"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
