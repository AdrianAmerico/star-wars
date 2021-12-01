import React from 'react'
import { HeaderWrapperMobile, ImgStyled } from './headermobile.component.style'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

export const HeaderMobile = () => {
  return (
    <HeaderWrapperMobile>
      <span>
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
