<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from "./components/menubar.vue"
</script>

<template>
  <MenuBar></MenuBar>
  <RouterView />
</template>

<style>
* {
  text-decoration: none;
  font-family: 'Mitr', sans-serif;
}
</style>