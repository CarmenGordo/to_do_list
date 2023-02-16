import styled from "styled-components";

export const StyledLogoContainer= styled.div`
    width: 100%;
    max-width: 80px;
    height: 80px;
    background-color: plum;
    display: inline-block;

    &.-small{
        /* max-width: 80px;
        height: 80px; */
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        border: solid 5px palegreen;
    }

    &.-large{
        border: solid 5px paleturquoise;
    }
`