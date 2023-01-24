import propTypes from "prop-types"
import { StyledOptionsSelect, StyledLabelButton } from "./StyledLabelButton"

export const LabelButton = ({ optionsLabel, labelNote, handleChooseLabel,handleChangeLabel, size}) => {
   
    return(
        <>
            <StyledLabelButton
            isReq 
                className={`-${size}`}
                onChange={handleChooseLabel}
            >
                <option disabled selected>Choose a feature</option>
                {optionsLabel?.map((option) => 
                (                   
                    <StyledOptionsSelect 
                        key={option.id}
                        id={option.id}
                        value={option.value}
                        className={`-${option.value}`}
                        selected={labelNote === option.value}
                    >{option.label}</StyledOptionsSelect>
                ))}                
                
            </StyledLabelButton>

        </>
    )
}

LabelButton.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    // value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

LabelButton.defaultProps = {
    size: "small",
    // value: "toDo"
    // todo:
    // onClick: undefined
}