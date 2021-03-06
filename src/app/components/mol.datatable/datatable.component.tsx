import React from 'react'
import MUIDataTable from 'mui-datatables'
import { DivStyled } from './datatable.component.style'
import { IPeople } from '../../../atomic/obj.constants/types'

interface Props {
  title: string;
  data: string[][] | IPeople[];
  columns: string[];
  onClick: (props: any) => void;
}

export const DataTable = ({ title, data, columns, onClick }: Props) => {
  return (
    <DivStyled>
      <MUIDataTable
        title={title.toLocaleUpperCase()}
        data={data}
        columns={columns}
        options={{
          search: true,
          download: true,
          print: true,
          viewColumns: true,
          filter: true,
          filterType: 'dropdown',
          tableBodyMaxHeight: '',
          onRowClick: (props: any) => onClick(props),
          selectableRowsHideCheckboxes: true
        }}
      />
    </DivStyled>
  )
}
