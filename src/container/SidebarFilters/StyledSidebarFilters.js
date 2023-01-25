import styled from "styled-components";

export const StyledSidebarFiltersContainer = styled.div`
    width: 100px;
    background-color: plum;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 0; */

    p{
        cursor: pointer;
        text-decoration: ${props => props.select ? 'solid 1px red' : ''};
    }
`
