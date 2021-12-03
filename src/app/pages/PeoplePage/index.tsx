/* eslint-disable react/prop-types */
/* eslint-disable multiline-ternary */
/* eslint-disable camelcase */
import React from 'react'
import { DataTable, Header, Loading } from '../../components'
import { columns } from './peoplepage.component.mock'
import { mainAPI } from '../../data/request'
import { IPeople } from '../../../atomic/obj.constants/types'
import { useNavigator } from '../../hook/useNavigator'
import { useParams } from 'react-router'

export const PeoplePage = () => {
  const [people, setPeople] = React.useState<IPeople[]>([])
  const { goToPeopleMovies } = useNavigator()
  const params = useParams()

  React.useEffect(() => {
    const getPeople = async () => {
      const value = await mainAPI.getPeople(params.name)
      const peoplesData = value?.data?.results?.map(
        ({
          name,
          height,
          mass,
          birth_year,
          hair_color,
          gender,
          skin_color
        }: IPeople) => {
          return [
            name,
            mass,
            height,
            hair_color,
            skin_color,
            birth_year,
            gender
          ]
        }
      )
      setPeople(peoplesData)
    }
    getPeople()
    console.log(params)
  }, [])

  return (
    <React.Fragment>
      <Header />
      {people.length ? (
        <DataTable
          title={'Pessoas'}
          data={people}
          columns={columns}
          onClick={(props: string[]) => goToPeopleMovies(props[0])}
          // Retorna um array de string, o index 0 é o nome do ator
        />
      ) : (
        <Loading />
      )}
    </React.Fragment>
  )
}
