import styled from "styled-components";

export const StyledDescriptionTask = styled.textarea`
    /* width: 100%; */
    background-color: grey;

    &.-small{
        max-width: 200px;
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        max-width: 250px;
        border: solid 5px palegreen;
    }

    &.-large{
        max-width: 500px;
        border: solid 5px paleturquoise;
    }
`