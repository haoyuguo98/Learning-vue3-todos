import {defineStore} from 'pinia'

const useTodeStore =defineStore('todolist',{
  state:()=>{
    return{
      // list:[
      //   {id:1,name:'吃饭',done:false},
      //   {id:2,name:'睡觉',done:true},
      //   {id:3,name:'打豆豆',done:false},
      // ],
      // 持久化存储 取数据
      list: JSON.parse(localStorage.getItem('todos') || '[]'),
      checkName:['All','Active','Completed'],
      active:'All'
    }
  },
  actions:{
    // 从组件改变选定状态
    hChange(id){
     const isDone= this.list.find(item=>item.id===id)
    //  直接取反
     isDone.done=!isDone.done
    },
    // 全选反选
    isChange(e){
      return this.list.forEach(item => item.done = e)
    },
    hAdd(taskName){
      // 如果输入数据为空 则直接退出
      if(taskName==='') return
      this.list.push({
        id:Date.now(),
        name:taskName,
        done:false
      })
    },
    hDel(id){
    this.list= this.list.filter(item => item.id !== id)
    },
    clear(){
      this.list = this.list.filter(item =>!item.done)
    },
    check(name){
      this.active=name
    }
    
  },
  getters:{
    // 需要将数据return出去
    isAll(){
      return this.list.every(item => item.done)
    },
    // 计算未完成数目
    leftCount(){
      return this.list.filter(item=>!item.done).length
    },
    // 根据点击不同选项状态 来生成不同的列表 给mian页面渲染
    showList(){
      if(this.active==='Active'){
        return this.list.filter(item=>!item.done)
      }else if(this.active==='Completed'){
        return this.list.filter(item=>item.done)
      }else{
        return this.list
      }
    }
  }

})

export default useTodeStore