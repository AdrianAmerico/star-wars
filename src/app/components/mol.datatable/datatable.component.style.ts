import styled from 'styled-components'

export const DivStyled = styled.div`
display: flex;
div,
tr,
th {
  flex: 1;
  background: transparent;
  color: #ddd;
  font-weight: 800;
}

> div {
  display: flex;
  margin: auto 0;
  flex-direction: column;
  div {
    :first-child {
      background: linear-gradient(0deg, transparent, black 80%) no-repeat !important;
      svg {
        color: #aaa;
      }
    }
  }
}
`
