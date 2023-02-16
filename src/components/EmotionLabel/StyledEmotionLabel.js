import styled from "styled-components";

export const StyledEmotionalContainer = styled.div`
    width: 100%;
    background-color: aliceblue;
    margin-bottom: 10px;

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
    h5{
        padding-bottom: 10px;
    }

`
export const StyledEmotionalInput = styled.input`
    opacity: 0;
    width: 0;
`

export const StyledEmotionalLabel = styled.label`
    width: 100%;
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;

    @media screen and (min-width: 768px) {
        max-width: 50px;
        height: 50px;
    }

    @media screen and (min-width: 1024px) {
        max-width: 60px;
        height: 60px;
    }

    ${StyledEmotionalInput}:checked{
        box-shadow: 0px 22px 26px 0px rgba(255,0,255,1);
        border: solid 5px red;
    }
    
    /* todo: Type of the label depend on the emotion */ 
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

export const StyledEmotionalLabelText = styled.p`

    ${StyledEmotionalInput}:checked + &&{
        color:red
    }
`
