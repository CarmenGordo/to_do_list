import styled from "styled-components";

export const StyledForm = styled.form`
    /* width: auto; */
    /* display: flex; */
    /* justify-content: center; */
    /* background-color: beige; */
    
    @media screen and (min-width: 768px) {
        background-color: ${props => (props.small ? 'beige' : 'grey')};
    }

    &.-example{
        /* todo: arreglar formato de ejemplo */
        background-color: greenyellow !important;
    }

    &.-small{
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        max-width: 25px;
        border: solid 5px palegreen;
    }

    &.-large{
        border: solid 5px paleturquoise;
    }

    p{
        display: inline;
    }
`