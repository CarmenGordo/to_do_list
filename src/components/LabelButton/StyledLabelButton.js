import styled from "styled-components";

export const StyledLabelButton = styled.select`
    background-color: aliceblue;

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

    &.-toDo{
        color: red
    }

    &.-inProgress{
        color: green
    }

    &.-done{
        color: blue
    }

    &.-hold{
        color: blueviolet
    }

    &.-dropped{
        color: brown;
    }
`