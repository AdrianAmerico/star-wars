import React from 'react'
import { A, Li, LOGO, Ul, P, routes } from '../../../../atomic'
import {
  DivCenter,
  DivImgStyled,
  ImgStyled,
  NavStyled,
  SectionStyled,
  HeaderDesktopWrapper
} from './headerdesktop.component.style'
import { useNavigate } from 'react-router-dom'
import { useNavigator } from '../../../hook/useNavigator'
import { GlobalContext } from '../../../context'
import { SearchField } from '../..'

export const HeaderDesktop = () => {
  const { goToHomePage, goToPeopleDetails } = useNavigator()
  const { text } = React.useContext(GlobalContext)
  const navigate = useNavigate()

  return (
    <HeaderDesktopWrapper>
      <SectionStyled>
        <div />
        <DivImgStyled onClick={goToHomePage}>
          <ImgStyled src={LOGO} />
        </DivImgStyled>
        <DivCenter>
          <SearchField onClick={() => goToPeopleDetails(text)} />
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
