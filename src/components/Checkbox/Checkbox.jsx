import propTypes from "prop-types"
import { StyledCheckbox } from "./StyledCheckbox";

export const Checkbox = ({id, checkedTask, size}) =>{
    return(
        <>
            <StyledCheckbox 
                type="checkbox"
                id={id}
                className={`-${size}`}
                onClick={()=>checkedTask(id)}
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