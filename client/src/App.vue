<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from "./components/menubar.vue"

</script>

<template>
  <MenuBar></MenuBar>
  <Toast position="bottom-right" />
  <RouterView />
</template>
