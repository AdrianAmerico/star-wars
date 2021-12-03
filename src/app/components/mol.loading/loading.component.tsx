import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { styles } from './loading.component.style'

export const Loading = () => {
  return (
    <Box sx={styles}>
      <CircularProgress size={100} />
    </Box>
  )
}
