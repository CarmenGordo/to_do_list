import propTypes from "prop-types"
import { StyledOptionsSelect, StyledLabelButton } from "./StyledLabelButton"

export const LabelButton = ({ optionsLabel, labelNote, handleChooseLabel, handleChangeLabel, size}) => {
   
    return(
        <>
            <StyledLabelButton
                className={`-${size}`}
                required
                onChange={handleChooseLabel}
                // todo: resetear el estado del task
                // onClick={handleChangeLabel}
            >
                <option disabled selected>Choose an feature</option>
                {optionsLabel?.map((option) => 
                (                   
                    <StyledOptionsSelect 
                        key={option.id}
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