import styled from "styled-components";
import { responsive, colors } from "../../globalStyles";

export const StyledTask = styled.input`
    width: 100%;
    max-width: 140px;
    border-radius: 5px;
    padding: 3px 2px;
    margin: 10px 10px 10px 0;
    border: 1px solid ${colors.lightGrey};

    @media screen and (min-width: ${responsive.sm}){
        min-width: 220px;
    }

    @media screen and (min-width: ${responsive.md}){
        min-width: 300px;
    }  
       
        

    &.-large{
        max-width: 300px;
        border: solid 5px paleturquoise;
    }
`