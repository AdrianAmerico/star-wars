import React from 'react'
import { HeaderWrapperMobile, ImgStyled } from './headermobile.component.style'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

interface Props {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const HeaderMobile = ({ toggleDrawer }: Props) => {
  return (
      <HeaderWrapperMobile>
        <span onClick={toggleDrawer(true)}>
          <MenuIcon />
        </span>

        <ImgStyled
          src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz@2x-f98247cb30aa.png"
          alt="aa"
        />

        <span>
          <SearchIcon />
        </span>
      </HeaderWrapperMobile>
  )
}
