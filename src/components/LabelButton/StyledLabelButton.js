import styled from "styled-components";

export const StyledLabelButton = styled.select`
    background-color: aliceblue;
    display: inline;

    &.-small{
        max-width: 200px;
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        max-width: 250px;
        border: solid 5px palegreen;
    }

    &.-large{
        max-width: 300px;
        border: solid 5px paleturquoise;
    }
`
export const StyledOptionsSelect = styled.option`

    &.-toDo{
        color: red
    }

    &.-inProgress{
        color: yellow
    }

    &.-done{
        color: blue
    }

    &.-hold{
        color: violet
    }

    &.-dropped{
        color: grey;
    }
`