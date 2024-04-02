import api from './api.js'

class Project {
  static async fetch(id) {
    const data = await api.get(`/projects/${id}`)
    return data
  }

  static async fetchAll() {
    const data = await api.get('/projects')
    return data
  }

  static async setLaneOrder(project) {
    project.lanes = project.lanes.map((lane, i) => ({ ...lane, order: i }))

    const data = await api.put(`/projects/lanes/order`, project.lanes)
    return data
  }

  static async setTaskOrder(project, event) {
    const ids = [event.from.id, event.to.id]
    const lanes = project.lanes.filter(lane => ids.includes(lane.id))

    for (const lane of lanes) {
      lane.tasks = lane.tasks.map((task, i) => ({ ...task, order: i }))
    }

    const data = await api.put(`/projects/tasks/order`, lanes)
    return data
  }
}

export default Project
