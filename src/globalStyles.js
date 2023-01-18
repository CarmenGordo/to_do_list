import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        background-color: aliceblue;
    }
`

export const Heading = styled.h2`
    size: ${({size}) => (small ? small : large)}
`