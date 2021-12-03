import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Search } from '../../desktop/headerdesktop.component.style'
import { useNavigator } from '../../../../hook/useNavigator'

const style = {
  position: 'absolute' as 'absolute',
  top: '0',
  left: '0',
  right: '0',
  background: ' linear-gradient(0deg, transparent, black 30%) no-repeat;',
  color: '#000',
  border: 'none',
  p: 4,
  '& div > div': {
    color: '#fff',
    ':first-child': {
      border: '1px solid white',
      color: '#fff'
    }
  }
}

interface Props {
  open: boolean;
  handleClose: () => any;
  text: string;
  onChange: (event: any) => any;
}

export default function HeaderMobileModal ({ open, handleClose, text, onChange }: Props) {
  const { goToPeopleDetails } = useNavigator()

  const onSearch = () => {
    goToPeopleDetails(text)
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TextField
              placeholder="Procurar..."
              color="primary"
              value={text}
              fullWidth
              onChange={(event) => onChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search onClick={onSearch}>
                      <SearchIcon/>
                    </Search>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
