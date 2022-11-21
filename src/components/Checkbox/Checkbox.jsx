import propTypes from "prop-types"
import { StyledCheckbox } from "./StyledCheckbox";

export const Checkbox = ({size}) =>{
    return(
        <>
            <StyledCheckbox 
                input="checkbox"
                className={[`-${size}`]}
            />
        </>
    )
}

Checkbox.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    onClick: propTypes.func
}

Checkbox.defaultProps = {
    size: "small",
    // todo
    // onClick: undefined
}