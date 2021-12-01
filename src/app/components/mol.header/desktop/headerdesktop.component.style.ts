import styled from 'styled-components'
import { spacing } from '../../../../atomic'

export const HeaderDesktopWrapper = styled.div`
display: block;
@media(max-width: 600px) {
    display: none;
}
`

export const SectionStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
  }
`

export const DivImgStyled = styled.div`
  display: flex;
`

export const ImgStyled = styled.img`
  width: 80%;
  box-shadow: none;
  height: 100px;
  max-height: 135px;
  border: none;
  background-color: black;
  margin: ${spacing.medium} auto;
`

export const Search = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
  }
`

export const NavStyled = styled.nav`
  left: 0;
  width: 100%;
  height: auto;
  padding: 0;
  overflow-y: hidden;
  position: relative;
  visibility: visible;
  opacity: 1;
  background-color: ${(props) => props.theme.colors.black_secondary};
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  border-top: 1px solid ${(props) => props.theme.colors.grayMedium};
`

export const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  > div {
    background-color: ${(props) => props.theme.colors.grayMedium};
  }
`
