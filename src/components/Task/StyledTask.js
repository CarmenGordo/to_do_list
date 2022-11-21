import styled from "styled-components";

export const StyledTask = styled.input`
    /* width: 100%; */
    background-color: red;

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
`