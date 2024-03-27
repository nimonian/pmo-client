const api = {
  base: import.meta.env.VITE_API_URL,

  getUrl(path, query) {
    const url = new URL('/api' + path, this.base)
    url.search = new URLSearchParams(query)
    return url.toString()
  },

  getHeaders(headers) {
    return new Headers(headers)
  },

  async get(path, query, headers) {
    const url = this.getUrl(path, query)
    console.log(url)

    const options = {
      method: 'GET',
      headers: this.getHeaders(headers)
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
  }
}

console.log(api)

export default api
