import propTypes from "prop-types"
import { StyledCheckbox } from "./StyledCheckbox";

export const Checkbox = ({labelNote, id, checkedTask, size}) =>{
    return(
        <>
            {labelNote === "done" ? 
                <StyledCheckbox 
                    type="checkbox"
                    id={id}
                    className={`-${size}`}
                    onClick={()=>checkedTask(id, labelNote)}
                    checked
                />
            :
                <StyledCheckbox 
                    type="checkbox"
                    id={id}
                    className={`-${size}`}
                    onClick={()=>checkedTask(id, labelNote)}
                    checked={false}

                />
            }
            
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