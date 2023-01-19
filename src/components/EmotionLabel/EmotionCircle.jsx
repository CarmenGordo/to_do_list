import propTypes from "prop-types"
import { StyledEmotionalLabel, StyledEmotionalLabelText } from "./StyledEmotionLabel"

export const EmotionCircle = ({emotion, size}) => {
   
    return(
        <> 
            <StyledEmotionalLabel 
            className={`-${emotion}`}
            // todo: onClick to open modal
            >
                {/* todo: PETA show the emotional label */}
                <StyledEmotionalLabelText key={emotion.id}>{emotion}</StyledEmotionalLabelText>
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