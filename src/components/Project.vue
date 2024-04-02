<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Project from '../services/projects.js'

const route = useRoute()

const project = ref(null)

onMounted(async () => {
  project.value = await Project.fetch(route.params.id)
})
</script>

<template>
  <section v-if="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
  </section>

  <section v-if="project?.lanes">
    <draggable
      :list="project.lanes"
      group="lanes"
      item-key="id"
      class="lanes"
      @end="Project.setLaneOrder(project, $event)"
    >
      <template #item="{ element: lane }">
        <Card class="lane">
          <template #title>
            {{ lane.title }}
          </template>
          <template #content>
            <draggable
              v-model="lane.tasks"
              :id="lane.id"
              group="items"
              item-key="id"
              class="tasks"
              @end="Project.setTaskOrder(project, $event)"
            >
              <template #item="{ element: item }">
                <Card class="task">
                  <template #title>
                    {{ item.title }}
                  </template>
                </Card>
              </template>
            </draggable>
          </template>
        </Card>
      </template>
    </draggable>
  </section>

  <pre
    >{{ project }}
  </pre>
</template>

<style scoped>
.lanes {
  display: flex;
  gap: 1rem;
}

.lane {
  flex: 1;
  max-width: 20rem;
  background-color: hsl(0, 0%, 95%);
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
