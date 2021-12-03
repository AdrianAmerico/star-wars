import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { useNavigator } from '../../../../hook/useNavigator'
import { style } from './headermobilemodal.component.style'
import { GlobalContext } from '../../../../context'
import { SearchField } from '../../..'
interface Props {
  open: boolean;
  handleClose: () => void;
  // text: string;
  // onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const HeaderMobileModal = ({ open, handleClose }: Props) => {
  const { goToPeopleDetails } = useNavigator()
  const { text } = React.useContext(GlobalContext)

  const onSearch = () => {
    goToPeopleDetails(text)
    handleClose()
  }

  return (
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
            <SearchField onClick={onSearch}/>
          </Box>
        </Fade>
      </Modal>
  )
}
