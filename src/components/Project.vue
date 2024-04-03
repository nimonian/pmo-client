<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Project from '../services/projects.js'

const route = useRoute()
const project = Project.model

onMounted(async () => {
  await Project.fetch(route.params.id)
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
      @end="Project.setLaneOrder($event)"
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
              @end="Project.setTaskOrder($event)"
            >
              <template #item="{ element: task }">
                <Card class="task">
                  <template #title>
                    {{ task.title }}
                  </template>
                </Card>
              </template>
            </draggable>
          </template>
        </Card>
      </template>
      <template #footer>
        <Button class="lane_button" @click="Project.addLane()">
          + Add list
        </Button>
      </template>
    </draggable>
  </section>

  <pre
    >{{ project }}
  </pre>
</template>

<style>
.lanes {
  display: flex;
  gap: 1rem;
}

.lane {
  width: 20rem;
  background-color: hsl(0, 0%, 95%);
  height: fit-content;
  flex-shrink: 0;
}

.lane_button {
  width: 20rem;
  min-width: 20rem;
  height: fit-content;
  text-align: left;
  display: block;
  background-color: hsl(0, 0%, 95%);
  color: var(--gray-700);
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  border: none;
}

.lane_button:hover {
  background-color: hsl(0, 0%, 92%);
}

.lane_button:active {
  background-color: hsl(0, 0%, 98%);
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<style>
.tasks .p-card-title {
  font-size: 1rem;
}
</style>
