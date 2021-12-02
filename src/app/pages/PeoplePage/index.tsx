/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { DataTable, Loading } from '../../components'
import { columns } from './peoplepage.component.mock'
import { mainAPI } from '../../data/request'
import { IPeople } from '../../../atomic/obj.constants/types'
import { useNavigator } from '../../hook/useNavigator'

export const PeoplePage = () => {
  const [people, setPeople] = React.useState<IPeople[]>([])
  const { goToPeopleMovies } = useNavigator()

  React.useEffect(() => {
    const getPeople = async () => {
      const value = await mainAPI.getPeople()
      const peoplesData = value?.data?.results?.map(
        ({
          name,
          height,
          mass,
          birth_year,
          hair_color,
          gender,
          skin_color,
          url
        }: IPeople) => {
          return [
            name,
            mass,
            height,
            hair_color,
            skin_color,
            birth_year,
            gender,
            url
          ]
        }
      )
      setPeople(peoplesData)
    }
    getPeople()
  }, [])

  return (
    <React.Fragment>
      {people && people.length
        ? (
        <DataTable
          title={'Pessoas'}
          data={people}
          columns={columns}
          onClick={(props: string[]) => goToPeopleMovies(props[7])}
          // No evento onClick, ele retorna os valores na tabela e o ultimo index é a URL com o ID do usuário selecionado que retorna da API, aqui capturo a url que é o index 7 e mando para ser tratado pelo hook
        />
          )
        : (
        <Loading />
          )}
    </React.Fragment>
  )
}
