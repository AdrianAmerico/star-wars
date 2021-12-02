/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { Header, DataTable, Loading } from '../../components'
import { columns } from './peoplepage.component.mock'
import { mainAPI } from '../../data/request'
import { IPeople } from '../../../atomic/obj.constants/types'

export const PeoplePage = () => {
  const [people, setPeople] = React.useState<IPeople[]>([])

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
          films
        }: IPeople) => {
          return [
            name,
            mass,
            height,
            hair_color,
            skin_color,
            birth_year,
            gender,
            films
          ]
        }
      )
      setPeople(peoplesData)
    }
    getPeople()
  }, [])

  return (
    <React.Fragment>
      <Header />
      {people && people.length
        ? (
        <DataTable
          title={'Pessoas'}
          data={people}
          columns={columns}
          onClick={(props) => console.log(props)}
        />
          )
        : (
        <Loading />
          )}
    </React.Fragment>
  )
}
