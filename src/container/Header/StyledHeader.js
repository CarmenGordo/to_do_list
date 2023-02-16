import styled from "styled-components";
import { responsive } from "../../globalStyles";

export const StyledHeader= styled.div`
    width: 100%;
    display: flex;
    background-color: beige;
    
    /* @media screen and (min-width: 768px) {
        background-color: ${props => (props.small ? 'beige' : 'grey')};
    } */
    @media screen and (min-width: ${responsive.xs}){
        background-color: grey;
        max-width: 20%;
        min-height: 500px;
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
`
