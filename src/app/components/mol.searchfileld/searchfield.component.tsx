import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Search } from '../../../atomic'
import { GlobalContext } from '../../context'

interface Props {
  onClick: () => void;
}

export const SearchField = ({ onClick }: Props) => {
  const { text, onChangeText } = React.useContext(GlobalContext)
  return (
    <TextField
      placeholder="Procurar..."
      color="primary"
      value={text}
      fullWidth
      onChange={(event) => onChangeText(event)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search onClick={onClick}>
              <SearchIcon />
            </Search>
          </InputAdornment>
        )
      }}
    />
  )
}
