import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { A, Li, LOGO, P, Ul } from '../../../atomic'
import {
  HeaderStyled,
  SectionStyled,
  Search,
  NavStyled,
  ImgStyled,
  ImgContainer,
  DivCenter
} from './header.component.style'
import SearchIcon from '@mui/icons-material/Search'

export const Header = () => {
  return (
    <HeaderStyled>
      <SectionStyled>
        <div />
        <ImgContainer>
          <ImgStyled src={LOGO} />
        </ImgContainer>
        <DivCenter>
          <TextField
            placeholder="Procurar..."
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search>
                    <SearchIcon />
                  </Search>
                </InputAdornment>
              )
            }}
          />
        </DivCenter>
      </SectionStyled>
      <NavStyled>
        <Ul>
          <Li>
            <A>
              <P>Pessoas</P>
            </A>
          </Li>

          <Li>
            <A>
              <P>Naves</P>
            </A>
          </Li>

          <Li>
            <A>
              <P>Planetas</P>
            </A>
          </Li>
        </Ul>
      </NavStyled>
    </HeaderStyled>
  )
}
