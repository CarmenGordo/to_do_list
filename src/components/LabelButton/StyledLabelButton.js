import styled from "styled-components";
import { responsive, colors } from "../../globalStyles";

export const StyledLabelButton = styled.select`
    
    background-color: plum;
    display: inline;
    border: solid 1px ${colors.lightGrey};
    border-radius: 5px;
    padding: 2px 2px;
    margin-right: 10px;

    @media screen and (min-width: ${responsive.sm}) {
        
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