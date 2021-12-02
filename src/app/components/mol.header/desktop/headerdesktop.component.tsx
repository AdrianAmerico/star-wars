import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { A, Li, LOGO, Ul, P, routes } from '../../../../atomic'
import {
  DivCenter,
  DivImgStyled,
  ImgStyled,
  NavStyled,
  Search,
  SectionStyled,
  HeaderDesktopWrapper
} from './headerdesktop.component.style'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

export const HeaderDesktop = () => {
  const navigate = useNavigate()
  return (
    <HeaderDesktopWrapper>
      <SectionStyled>
        <div />
        <DivImgStyled>
          <ImgStyled src={LOGO} />
        </DivImgStyled>
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
          <Li
            onClick={() => {
              navigate(routes.people)
            }}
          >
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
    </HeaderDesktopWrapper>
  )
}
