/* eslint-disable camelcase */
import React from 'react'
import { useParams } from 'react-router'
import { DataTable, Header, Loading } from '../../components'
import { mainAPI } from '../../data/request'
import { columns } from './infopage.component.mock'
import axios from 'axios'
import { IMovies } from '../../../atomic/obj.constants/types'

export const InfoPage = () => {
  const [movieInfo, setMovieInfo] = React.useState([])
  const { name } = useParams()

  const getMoviesData = async (filmArr: string[]) => {
    const movieDataArr: any = []

    for (let i = 0; filmArr.length > i; i++) {
      const data = await axios.get(filmArr[i]).then((data) => data.data)
      movieDataArr.push(data)
    }
    const movieData = movieDataArr.map(
      ({ title, director, producer, release_date }: IMovies) => {
        return [
          title,
          director,
          producer,
          new Date(release_date).getFullYear()
        ]
      }
    )
    return movieData
  }

  React.useEffect(() => {
    const getData = async () => {
      const value = await mainAPI.getSearchData(name)
      const data = await getMoviesData(value[0]?.films)
      setMovieInfo(data)
    }
    getData()
  }, [])

  return (
    <React.Fragment>
      <Header />
      {movieInfo && movieInfo.length
        ? (
        <DataTable
          title={'Filmes'}
          data={movieInfo}
          columns={columns}
          onClick={(props: any) => console.log(props)}
        />
          )
        : (
        <Loading />
          )}
    </React.Fragment>
  )
}
