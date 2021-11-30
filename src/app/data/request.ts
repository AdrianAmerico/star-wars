import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export const mainAPI = {
  async getPeople (page = 1) {
    try {
      const { data } = await instance.get(`people/?page=${page}`)

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
  async getSearchData (value: any) {
    try {
      const { data } = await instance.get(`people/?search=${value}`)

      return {
        data
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
    }
  }
}
