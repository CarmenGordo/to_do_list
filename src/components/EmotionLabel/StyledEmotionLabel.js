import styled from "styled-components";

export const StyledEmotionalContainer = styled.div`
    width: 100%;
    background-color: aliceblue;

    &.-small{
        /* border: solid 5px palegoldenrod; */
    }

    &.-medium{
        /* border: solid 5px palegreen; */
    }

    &.-large{
        max-width: 30px;
        /* border: solid 5px paleturquoise; */
    }

`
export const StyledEmotionalInput = styled.input`
    opacity: 0;
`
export const StyledEmotionalLabel = styled.label`
    border-radius: 50%;

    ${StyledEmotionalInput}:checked{
        box-shadow: 0px 22px 26px 0px rgba(255,0,255,1);
        border: solid 5px red;
    }

    
    /* Type of the label depend on the emotion */ 
    &.-focus1{
        /* border: solid 5px palegoldenrod; */
        background-color: palegreen;
    }
    &.-focus2{
        /* border: solid 5px palegoldenrod; */
        background-color: paleturquoise;
    }
    &.-focus3{
        /* border: solid 5px palegoldenrod; */
        background-color: palevioletred;
    }
    &.-focus4{
        /* border: solid 5px palegoldenrod; */
        background-color: papayawhip;
    }
    &.-focus5{
        /* border: solid 5px palegoldenrod; */
        background-color: peachpuff;
    }
`

export const StyledEmotionalLabelText = styled.span`
    display: flex;
    align-items: center;

    ${StyledEmotionalInput}:checked + &&{
        color:red
    }
`
