import React from 'react'
import MUIDataTable from 'mui-datatables'
export const PlanetPage = () => {
  const columns = ['Name', 'Title', 'Location']

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

  const teste = (props: any) => {
    console.log(props)
  }
  return (
      <MUIDataTable
        title={'ACME Employee list'}
        data={data}
        columns={columns}
        options={{
          search: true,
          download: true,
          print: true,
          viewColumns: true,
          filter: true,
          filterType: 'dropdown',
          tableBodyHeight: '400px',
          tableBodyMaxHeight: '',
          onRowClick: (props: any) => teste(props),
          selectableRowsHideCheckboxes: true
        }}
      />
  )
}