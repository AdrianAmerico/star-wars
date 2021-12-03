import React from 'react'
import { HeaderMobile } from './mobile'
import { HeaderStyled } from './header.component.style'
import { HeaderDesktop } from './desktop'
import { DrawerHeader } from './drawer'

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setIsDrawerOpen(!isDrawerOpen)
    }

  return (
    <HeaderStyled>
      <HeaderDesktop />
      <HeaderMobile toggleDrawer={toggleDrawer} />
      <DrawerHeader open={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </HeaderStyled>
  )
}
