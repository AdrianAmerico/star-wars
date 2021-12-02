import styled from 'styled-components'
import { spacing } from '../../../atomic'

export const HeaderStyled = styled.header`
  z-index: 101;
  width: 100%;
  top: 0;
  padding: ${spacing.medium};
  background: ${props => props.theme.colors.black_secondary};

  @media(max-width: 600px){
    padding: 0;
  }
`
