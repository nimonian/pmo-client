import { ref } from 'vue'
import api from './api.js'

class Project {
  static model = ref(null)

  static async fetch(id) {
    const data = await api.get(`/projects/${id}`)
    Project.model.value = data
  }

  static async fetchAll() {
    const data = await api.get(`/projects`)
    return data
  }

  static async setLaneOrder() {
    const project = Project.model.value
    project.lanes = project.lanes.map((lane, i) => ({ ...lane, order: i }))

    const data = await api.put(`/projects/lanes/order`, project.lanes)
    return data
  }

  static async setTaskOrder(event) {
    const project = Project.model.value
    const ids = [event.from.id, event.to.id]
    const lanes = project.lanes.filter(lane => ids.includes(lane.id))

    for (const lane of lanes) {
      lane.tasks = lane.tasks.map((task, i) => ({ ...task, order: i }))
    }

    const data = await api.put(`/projects/tasks/order`, lanes)
    return data
  }

  static async addLane(title = 'New Lane') {
    const project = Project.model.value
    const order_index = project.lanes.length
    const lane = await api.post(`/projects/${project.id}/lanes`, {
      title,
      order_index
    })
    project.lanes.push(lane)
  }
}

export default Project
