import styled from 'styled-components'

export const DivStyled = styled.div`
display: flex;
div,
th {
  flex: 1;
  background: transparent;
  color: #ddd;
  font-weight: 800;
  background-color: transparent;
}

> div {
  display: flex;
  margin: auto 0;
  flex-direction: column;
  div {
    :nth-child(1) {
       background-color: transparent !important;
      svg {
        color: #aaa;
      }
    }
    span {
      background: transparent !important;
    }
  }
}
td {
  color: white;
}
`
