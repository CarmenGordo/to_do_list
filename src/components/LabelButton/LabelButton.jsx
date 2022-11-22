import propTypes from "prop-types"
import { StyledLabelButton } from "./StyledLabelButton"

export const LabelButton = ({size}) => {

    const options =[
        {
            label: "To Do",
            value: "toDo"
        }, {
            label: "In Progress",
            value: "inProgress"
        }, {
            label: "Done",
            value: "done"
        }, {
            label: "Hold",
            value: "hold"
        }, {
            label: "Dropped",
            value: "dropped"
        }
    ]


    return(
        <>
            <StyledLabelButton
                
                className={[`-${size}`]}
            >
                {/* todo: */}
                {options.map((option)=> (
                    <option 
                        value={option.value}
                        className={[`-${option.value}`]}
                    >{option.label}</option>
                ))}
            </StyledLabelButton>
        </>
    )
}

LabelButton.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

LabelButton.defaultProps = {
    size: "small",
    value: "toDo"
    // todo:
    // onClick: undefined
}