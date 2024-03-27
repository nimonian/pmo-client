<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const projectId = route.params.id

const project = ref(null)
const columns = ref(null)

onMounted(async () => {
  project.value = await api.get(`/projects/${projectId}`)
  columns.value = await api.get(`/projects/${projectId}/columns`)
})
</script>

<template>
  <section v-if="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
  </section>

  <section v-if="columns" class="columns">
    <article v-for="column in columns" :key="column.id" class="column">
      <Card>
        <template #title>
          {{ column.title }}
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            sapiente.
          </p>
        </template>
      </Card>
    </article>
  </section>
</template>

<style scoped>
.columns {
  display: flex;
  gap: 1rem;
}

.column {
  flex: 1;
  max-width: 20rem;
}
</style>
