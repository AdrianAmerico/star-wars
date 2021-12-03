import styled from 'styled-components'
import { fontWeight, spacing, fontSize } from '..'

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  letter-spacing: 1px;
  margin: 0 auto;
  li:last-child {
    border-right: 1px solid ${props => props.theme.colors.gray};
  }
  li:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const Li = styled.li`
  display: table-cell;
  width: auto;
  margin: 0;
  vertical-align: top;
  border-left: 1px solid ${(props) => props.theme.colors.gray};
  box-sizing: border-box;
  padding: ${spacing.small} ${spacing.large};
`

export const A = styled.a`
  display: block;
  position: relative;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.yellow};
  font-weight: ${fontWeight.xxLarge};
`

export const P = styled.p`
  padding-left: 0;
  color: ${(props) => props.theme.colors.darkGray};
  width: 100%;
  margin: ${spacing.medium} 0 ${spacing.small} 0;
  font-size: ${fontSize.xxSmall};
  text-align: center;
  display: block;
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
