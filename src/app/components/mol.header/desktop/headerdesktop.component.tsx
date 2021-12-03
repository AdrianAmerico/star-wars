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
import { useNavigator } from '../../../hook/useNavigator'
import { GlobalContext } from '../../../context'

export const HeaderDesktop = () => {
  const { goToHomePage, goToPeopleDetails } = useNavigator()
  const { text, onChangeText } = React.useContext(GlobalContext)
  const navigate = useNavigate()

  return (
    <HeaderDesktopWrapper>
      <SectionStyled>
        <div />
        <DivImgStyled onClick={goToHomePage}>
          <ImgStyled src={LOGO} />
        </DivImgStyled>
        <DivCenter>
          <TextField
            fullWidth
            style={{ width: '100%' }}
            placeholder="Procurar..."
            color="primary"
            value={text}
            onChange={(event) => onChangeText(event)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search>
                    <SearchIcon onClick={() => goToPeopleDetails(text)} />
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

          {/*
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
          */}
        </Ul>
      </NavStyled>
    </HeaderDesktopWrapper>
  )
}
