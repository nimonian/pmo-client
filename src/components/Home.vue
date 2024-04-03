<script setup>
import { ref, onMounted } from 'vue'
import Project from '../services/projects.js'

const projects = ref([])

onMounted(async () => {
  projects.value = await Project.fetchAll()
})
</script>

<template>
  <h2>Home</h2>

  <h3>Projects</h3>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <router-link :to="`/project/${project.id}`">
        {{ project.title }}
      </router-link>
    </li>
  </ul>
</template>
