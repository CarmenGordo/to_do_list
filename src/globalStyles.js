import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        /* background-color: #E6E6E6; */
    } 

    h1, h2, h3, h4, h5, h6, p{
        /* todo: poner tipografia y tamaños elegidos  */
        /* background-color: white; */
    }
`

export const responsive = {
    xs: '425px',
    // de sm->md : tablet
    sm: '768px',
    md: '992px',
    // de l->md : deskop
    l:  '1024px',
    xl: '1440px'

}

export const colors = {
    background: '#E6E6E6',
    white: '#fff',
    lightGrey: '#ccc',
    blue: '#488EFE'
}

// export const Heading = styled.h2`
//     size: ${({size}) => (small ? small : large)}
// `