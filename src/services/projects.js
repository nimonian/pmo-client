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

  static async setLaneOrder(project, event) {
    project.lanes = project.lanes.map((lane, index) => {
      lane.order = index
      return lane
    })

    const data = await api.put(`/projects/lanes/order`, project.lanes)
    return data
  }
}

export default Project
