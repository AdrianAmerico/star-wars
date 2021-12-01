import React from 'react'
import { HeaderDesktop } from './desktop'
import { HeaderMobile } from './mobile'
import { HeaderStyled } from './header.component.style'

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderDesktop />
      <HeaderMobile/>
    </HeaderStyled>
  )
}
