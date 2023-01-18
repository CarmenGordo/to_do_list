import styled from "styled-components";

export const StyledListNotes = styled.div`
    width: 100%;
    background-color: aliceblue;
    display: flex;
    align-items: center;

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