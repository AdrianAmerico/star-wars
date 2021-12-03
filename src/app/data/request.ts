import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export const mainAPI = {
  async getPeople (user: string | null = '', page = 1) {
    try {
      const { data } = await instance.get(
        `people/?page=${page}&search=${user?.length ? user : ''}`
      )

      return {
        data
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    }
  },
  async getSearchData (name = '') {
    try {
      const { data } = await instance.get(`people/?search=${name}`)
      return data.results
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    }
  }
}
