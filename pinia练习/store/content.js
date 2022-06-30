import {defineStore} from 'pinia'

// 按需导出
// export const useContentStore = defineStore('content',{
//   state: ()=>{
//     return {
//       num:188
//     }
//   },
//   actions: {
//     add(){
//       this.num +=100
//     }
//   }
// })

// 默认导出
const useContentStore = defineStore('content',{
  state: ()=>{
    return {
      num:188
    }
  },
  actions: {
    add(){
      this.num +=100
    }
  }
})

export default useContentStore