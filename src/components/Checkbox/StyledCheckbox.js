import styled from "styled-components";

export const StyledCheckbox = styled.input`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;

    &.-small{
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        border: solid 5px palegreen;
    }

    &.-large{
        border: solid 5px paleturquoise;
    }
`