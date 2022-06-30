<script setup>
import { computed } from 'vue';

  // 声明子向父传值函数
  const emit = defineEmits(['hChangeDone','del','changeAll'])
// 调用声明函数向父组件传值
  const hChange = (id) => {
    emit('hChangeDone',id)
  }


  // 接受父组件传值
  const props= defineProps({
    list:{
      type: Array,
      default: ()=>[]
    }
  })

  const isAll = computed({
    set(val){
      emit('changeAll',val)
    },
    get(){
     return props.list.every(item=>item.done)
    }
  })
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model='isAll'/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked='item.done' @change='hChange(item.id)' />
          <label>{{item.name}}</label>
          <button class="destroy" @click="emit('del',item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
