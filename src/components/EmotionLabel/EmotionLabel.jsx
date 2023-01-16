import propTypes from "prop-types"
import { StyledEmotionLabel } from "./StyledEmotionLabel"

export const EmotionLabel = ({size}) => {

    // todo: the emotional options
    // enfocado, feliz/contento, triste, confundido, agobiado/anxioso, confiado, 
    // focus, happy, afraid, confident, confused, 
    const emotionalOptions =[
        {
            label: "Focus",
            value: "focus"
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
            <p>How do I feel about this task?</p>

            <StyledEmotionLabel
                className={[`-${size}`]}
            >
                {emotionalOptions.map((option)=> (                   
                    <option 
                        value={option.value}
                        className={[`-${option.value}`]}
                    >{option.label}</option>
                ))}
            </StyledEmotionLabel>
        </>
    )
}

EmotionLabel.propTypes = {
    size: propTypes.oneOf(["small", "medium", "large"]),
    value: propTypes.oneOf(["toDo", "inProgress", "done", "hold", "dropped"]),
    onClick: propTypes.func
}

EmotionLabel.defaultProps = {
    size: "small",
    value: "toDo"
    // todo:
    // onClick: undefined
}