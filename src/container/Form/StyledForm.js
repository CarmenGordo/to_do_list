import styled from "styled-components";

export const StyledForm = styled.div`
    display: inline;
    justify-content: center;

    &.-example{
        /* todo: arreglar formato de ejemplo */
        max-width: 20px;
        background-color: greenyellow !important;
    }

    &.-small{
        max-width: 20px;
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        max-width: 25px;
        border: solid 5px palegreen;
    }

    &.-large{
        max-width: 30px;
        border: solid 5px paleturquoise;
    }

    p{
        display: inline;
    }
`