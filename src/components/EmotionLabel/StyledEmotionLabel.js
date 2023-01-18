import styled from "styled-components";

export const StyledEmotionalContainer = styled.div`
    width: 100%;
    background-color: aliceblue;
    display: flex;

    &.-small{
        max-width: 20px;
        max-height: 20px;
        /* border: solid 5px palegoldenrod; */
    }

    &.-medium{
        max-width: 25px;
        /* border: solid 5px palegreen; */
    }

    &.-large{
        max-width: 30px;
        /* border: solid 5px paleturquoise; */
    }
`
export const StyledEmotionalInput = styled.input`
    opacity: 0
`
export const StyledEmotionalLabel = styled.label`
    border-radius: 50%;
    background-color: antiquewhite;
    ${StyledEmotionalInput}:checked{
        box-shadow: 0px 22px 26px 0px rgba(255,0,255,1);
        border: solid 5px red;
    }
`

export const StyledEmotionalLabelText = styled.span`
    display: flex;
    align-items: center;

    ${StyledEmotionalInput}:checked + &&{
        color:red
    }
`
