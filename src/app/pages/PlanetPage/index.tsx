import React from 'react'
import { Header, DataTable } from '../../components'

export const PlanetPage = () => {
  const columns = ['Nome', 'Title', 'Location']

  const data = [
    ['Gabby George', 'Business Analyst', 'Minneapolis'],
    [
      'Aiden Lloyd',
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      'Dallas'
    ],
    ['Jaden Collins', 'Attorney', 'Santa Ana', 'aaaa'],
    ['Franky Rees', 'Business Analyst', 'St. Petersburg'],
    ['Aaren Rose', null, 'Toledo'],
    ['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
    ['Jimmy Johns', 'Business Analyst', 'Baltimore'],
    ['Jack Jackson', 'Business Analyst', 'El Paso'],
    ['Joe Jones', 'Computer Programmer', 'El Paso'],
    ['Jacky Jackson', 'Business Consultant', 'Baltimore'],
    ['Jo Jo', 'Software Developer', 'Washington DC'],
    ['Donna Marie', 'Business Manager', 'Annapolis']
  ]

  return (
    <React.Fragment>
      <Header />
      <DataTable title={'Planetas'} data={data} columns={columns} onClick={(props) => console.log(props)}/>
    </React.Fragment>
  )
}
