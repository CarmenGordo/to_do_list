import propTypes from "prop-types"
import { StyledEmotionalLabel } from "./StyledEmotionLabel"

export const EmotionCircle = ({emotion, size}) => {
   
    return(
        <> 
            <StyledEmotionalLabel 
            className={`-${emotion}`}
            onClick>
                <p>{emotion}</p>
            </StyledEmotionalLabel>
        </>
    )
}

EmotionCircle.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    // value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

EmotionCircle.defaultProps = {
    size: "small",
    // value: "toDo"
    // todo:
    // onChange: undefined
}