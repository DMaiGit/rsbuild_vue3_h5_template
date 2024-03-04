<script lang="ts" setup>
import { useUserInfoStore } from '@stores/main';
import { getUserInfo } from '@/api/main';

fetchUserInfo()

const { info: userInfo } = useUserInfoStore();
console.log('userInfo: ', userInfo.name);

async function fetchUserInfo() {
  const response = await getUserInfo({id: 1});
  console.log('data: ', response);
}

</script>

<template>
  <div class="main-wrapper flex flex-1 flex-col">
    hello world
  </div>
</template>

