/* eslint-disable no-unused-vars */
import React from 'react'
import { HeaderWrapperMobile, ImgStyled } from './headermobile.component.style'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router'
import { routes } from '../../../../atomic'
import HeaderMobileModal from './mol.headermobilemodal'
interface Props {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  text: string
  onChange: (event: any) => void
}

export const HeaderMobile = ({ toggleDrawer, onChange, text }: Props) => {
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
          src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz@2x-f98247cb30aa.png"
          alt="aa"
          onClick={() => {
            navigate(routes.base)
          }}
        />

        <span onClick={handleOpen}>
          <SearchIcon />
        </span>
      </HeaderWrapperMobile>
      <HeaderMobileModal open={isOpenModal} handleClose={handleClose} text={text} onChange={onChange} />
    </>
  )
}
