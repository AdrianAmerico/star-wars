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
  async getPerson (id: number) {
    try {
      const { data } = await instance.get(`people/${id}`)

      data.films = await Promise.all(
        data.films.map(async (url: string) => {
          const { data } = await axios.get(url)
          return {
            episodeId: data.episode_id,
            title: data.title
          }
        })
      )

      return data
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
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
