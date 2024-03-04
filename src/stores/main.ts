import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useUserInfoStore = defineStore('userInfo', () => {
  const info = reactive<UserInfo>({
    id: 1,
    name: '张三',
    age: 18,
    gender: '男'
  })
  return { info }
})

