const api = {
  base: import.meta.env.VITE_API_URL,

  getUrl(path, query) {
    const url = new URL('/api' + path, this.base)
    url.search = new URLSearchParams(query)
    return url.toString()
  },

  getHeaders() {
    return new Headers({
      'Content-Type': 'application/json'
    })
  },

  async get(path, query) {
    const url = this.getUrl(path, query)

    const options = {
      method: 'GET',
      headers: this.getHeaders()
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  },

  async put(path, body) {
    const url = this.getUrl(path)

    const options = {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(body)
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  }
}

export default api
