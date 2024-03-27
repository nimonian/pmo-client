<script setup>
import { ref } from 'vue'

const title = ref('Vector PMO')
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <main>
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </main>
</template>
