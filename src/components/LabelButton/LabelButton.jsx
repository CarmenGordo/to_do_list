import { useState } from "react"
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

    // const [labelValue, setLabelValue] = useState(options)

    // const handleChooseLabel = (event)=>{
    //     console.log("labelValue---", event.target.value)
    //     setLabelValue(event.target.value);
    // }
    return(
        <>
            <StyledLabelButton
                className={[`-${size}`]}
            >
                <select name="" id="" 
                // onChange={handleChooseLabel}
                >
                    {options.map((option)=> (                   
                        <option 
                            value={option.value}
                            className={[`-${option.value}`]}
                        >{option.label}</option>
                    ))}
                </select>
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