import styled from "styled-components";
import { responsive, colors } from "../../globalStyles";

export const StyledDescriptionTask = styled.textarea`
    width: 100%;
    min-width: 80px;
    border: solid 1px ${colors.lightGrey};
    border-radius: 5px;
    padding: 3px 2px;

    &.-small{
        max-width: 200px;
        /* border: solid 5px palegoldenrod; */
    }

    &.-medium{
        max-width: 250px;
        /* border: solid 5px palegreen; */
    }

    &.-large{
        max-width: 500px;
        /* border: solid 5px paleturquoise; */
    }
`