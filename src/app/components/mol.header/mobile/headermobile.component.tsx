import React from 'react'
import { HeaderWrapperMobile, ImgStyled } from './headermobile.component.style'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router'
import { LOGO_MOBILE, routes } from '../../../../atomic'
import { HeaderMobileModal } from './mol.headermobilemodal'
interface Props {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const HeaderMobile = ({ toggleDrawer }: Props) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  const handleOpen = () => setIsOpenModal(true)
  const handleClose = () => setIsOpenModal(false)
  const navigate = useNavigate()
  return (
    <>
      <HeaderWrapperMobile>
        <span onClick={toggleDrawer(true)}>
          <MenuIcon />
        </span>

        <ImgStyled
          src={LOGO_MOBILE}
          alt="Logo"
          onClick={() => {
            navigate(routes.base)
          }}
        />

        <span onClick={handleOpen}>
          <SearchIcon />
        </span>
      </HeaderWrapperMobile>
      <HeaderMobileModal open={isOpenModal} handleClose={handleClose} />
    </>
  )
}
