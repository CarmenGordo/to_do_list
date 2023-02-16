import styled from "styled-components";
import { responsive } from "../../globalStyles";

export const StyledForm = styled.form`
    display: none;
    background-color: white;
    margin: 15px;
    border-radius: 5px;
    padding: 10px;

   
   @media screen and (min-width: ${responsive.xs}){
        display: block;
   }

    /* &.-small{
        @media screen {
            border: solid 5px blue;
            
        }
    }

    &.-medium{
        @media screen and (min-width: 768px){
            max-width: 25px;
            border: solid 5px palegreen;
        }
    }

    &.-large{
        @media screen and (min-width: 1024px){
            max-width: 50px;
            border: solid 5px paleturquoise;
        }
    } */

    p{
        display: inline;
    }

    button{
        background-color: plum;
        border: none;
        border-radius: 5px;
    }
`