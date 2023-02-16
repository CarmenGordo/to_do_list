import styled from "styled-components";

export const StyledAddButton= styled.button`
    padding: 10px;
    border-radius: 20px;
    position: fixed;
    bottom: 5px;
    right: 5px;
    z-index: 2;

    @media screen and (min-width: 768px) {
        display: none;
    }

    &.-small{
        border: solid 5px palegoldenrod;
    }

    &.-medium{
        border: solid 5px palegreen;
    }
`