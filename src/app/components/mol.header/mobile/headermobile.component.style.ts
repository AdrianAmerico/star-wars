import styled from 'styled-components'

export const HeaderWrapperMobile = styled.div`
display: none;
border-bottom: 2px solid #333;

span {
    padding: 12px;
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
    :first-child {
        border-right: 1px solid #333;
    }
    :last-child {
        border-left: 1px solid #333;
    }
}

@media(max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

export const ImgStyled = styled.img`
    width: 50%;
    padding: 20px 0;

`
