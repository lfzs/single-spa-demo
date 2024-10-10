<template>
  基座提供节点给子应用挂载 <a href="/v" @click="toApp">to app</a>

  <div id="app" />
</template>
<script setup>
import { navigateToUrl } from 'single-spa'
const toApp = e => {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { // 保留在新 tab 打开链接特性
    e.stopPropagation()
  } else {
    navigateToUrl(e)
  }
}
</script>