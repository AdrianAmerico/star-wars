import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigator } from '../../../../hook/useNavigator'
import { style } from './headermobilemodal.component.style'
import { Search } from '../../../../../atomic'
interface Props {
  open: boolean;
  handleClose: () => void;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
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
