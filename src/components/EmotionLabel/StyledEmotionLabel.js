import styled from "styled-components";

export const StyledEmotionLabel = styled.div`
    background-color: aliceblue;
    display: inline;
    border-radius: 50%;

    &.-small{
        max-width: 20px;
        max-height: 20px;
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