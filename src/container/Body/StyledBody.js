import styled from "styled-components";
import { responsive, colors } from "../../globalStyles";

export const StyledBody= styled.div`
    width: 100%;
    background-color: ${colors.background};
    position: absolute;

    @media screen and (min-width: ${responsive.xs}){
        left: 20%;
        top: 0px;
        max-width: 80%;
    }

    &.-small{
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        /* max-width: 25px; */
        border: solid 5px palegreen;
    }

    &.-large{
        border: solid 5px paleturquoise;
    }
`
