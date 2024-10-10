<template>
  app1
  <img :src="Excel" >
  <img :src="LoginBg" >
  <div>
    <RouterLink to="/">home</RouterLink>
     |
    <RouterLink to="/about">about</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
  import Excel from './excel.png'
  import LoginBg from './loginBg.png'
  import { RouterLink } from 'vue-router'
</script>

<style>
  img {
    border: 1px red solid;
    width: 100px;
  }
</style>