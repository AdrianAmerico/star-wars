import React from 'react'
import { useNavigate } from 'react-router'
import { routes } from '../../../atomic'
import { DataTable, Header } from '../../components'
import { columns, data } from './homepage.component.mock'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Header />
      <DataTable
        title={'Tabelas'}
        data={data}
        columns={columns}
        onClick={() => navigate(routes.people)}
      />
    </React.Fragment>
  )
}
